import {env} from "@/lib/config/env";
export class ApiService {
  
  getAPIUrl() {
    let domain = "grapehub.io";
    if (
      location.host.indexOf(domain) > -1 &&
      env.API_URL.indexOf("azurewebsites.net") > -1 &&
      (env.API_URL.includes("dev-") || env.API_URL.includes("stage-"))
    ) {
      return env.API_URL.replace("azurewebsites.net", "grapehub.io");
    } else {
      return env.API_URL;
    }
  }

  // Main request
  async request(endpoint, options = {}, retry = true) {
    const api_url = this.getAPIUrl();
    const url = `${api_url}${endpoint}`;

    const allowedDomains = [".localtest.me", ".grapehub.io"];
    const _isCredentialAllowed = allowedDomains.some(
      domain => api_url.includes(domain) && location.host.includes(domain)
    );

    const config = {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
        "X-Requested-With": "XMLHttpRequest",
      },
      ...(_isCredentialAllowed && { credentials: "include" }),
      ...options,
    };

    // logger.debug("API Request:", { url, method: config.method || "GET" });

    const response = await fetch(url, config);

    return this.handleResponse(response);
  }

  // Response handler
  async handleResponse(response) {
    if (!response.ok && response.status === 401) {
      let errorMessage = `HTTP error! status: ${response.status}`;

      try {
        const errorBody = await response.json();
        if (errorBody.errors) {
          errorBody.error = Object.values(errorBody.errors)
            .flat()
            .join(" & ");
        }
        errorMessage = errorBody.error || errorBody.message || errorMessage;
      } catch {
        if (window.location.pathname !== "/login") {
          localStorage.removeItem(env.USER_DATA_STORAGE_KEY);
          const currentUrl =
            window.location.pathname + window.location.search;
          localStorage.setItem("redirect", currentUrl);
          window.location.href = `/login?redirect=${currentUrl}`;
        }
        throw new Error("Unauthorized Access");
      }
      throw new Error(errorMessage);
    }

    if (!response.ok) {
      let errorMessage = `HTTP error! status: ${response.status}`;

      try {
        const errorBody = await response.json();
        if (errorBody.errors) {
          errorBody.error = Object.values(errorBody.errors)
            .flat()
            .join(" & ");
        }
        errorMessage = errorBody.error || errorBody.message || errorMessage;
      } catch {
        throw new Error(
          `Error for ${response.url.replace(env.API_URL, "")} ${errorMessage}`
        );
      }
      throw new Error(errorMessage);
    }

    if (response.status === 204) {
      // logger.debug("API Response: No Content");
      return null;
    }

    const contentType = response.headers.get("content-type");

    if (contentType?.includes("text/plain")) {
      const data = await response.text();
      // logger.debug("API Response (text):", data);
      return data;
    } else {
      const data = await response.json();
      // logger.debug("API Response (json):", data);
      return data;
    }
  }

  async getSubscriptionPlan(planId, source) {
    return this.request(
      `/api/Subscription/plans/${planId}?source=${source}`
    );
  }

  async getUserSubscriptions(userId, source) {
    const subscriptions = await this.request(
      `/api/Subscription/user-subscriptions/${userId}?source=${source}`
    );

    const plans = await this.getSubscriptionPlans(source);

    subscriptions.forEach(subscription => {
      const plan = plans.find(x => x.id == subscription.planId);
      if (plan) subscription.plan = plan;
    });

    return subscriptions;
  }

  //
  async getSubscriptionPlans(source) {
    return this.request(`/api/Subscription/plans?source=${source}`);
  }
}

export const apiService = new ApiService();
