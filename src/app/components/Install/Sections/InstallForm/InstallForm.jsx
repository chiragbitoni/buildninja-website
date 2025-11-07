"use client";
import { installFormText } from "../../../../../../public/static/installPageText";
import "./InstallForm.css";
import React from "react";
export default function InstallForm() {

  return (
    <section className="installFormSection">
      <div className="installFormSectionContainer">
        {/* Left: Form */}
        <div className="installFormSectionForm">
          <h2>{installFormText.title}</h2>
          <p>{installFormText.description}</p>

          <div className="installFormSectionRow">
            <div className="installFormSectionField">
              <label>{installFormText.formFields.firstName}</label>
              <input type="text" placeholder="Enter your First Name" />
            </div>
            <div className="installFormSectionField">
              <label>{installFormText.formFields.lastName}</label>
              <input type="text" placeholder="Enter your Last Name" />
            </div>
          </div>

          <div className="installFormSectionField">
            <label>{installFormText.formFields.businessEmail}</label>
            <input type="email" placeholder="Enter your Business Email" />
          </div>

          <div className="installFormSectionField">
            <label>{installFormText.formFields.companyName}</label>
            <input type="text" placeholder="Enter your Company Name" />
          </div>

          <h4 className="installFormSectionOptionalHeading">Optional Information</h4>

          <div className="installFormSectionField">
            <label>{installFormText.formFields.jobTitle}</label>
            <input type="text" placeholder="Enter your Job Title" />
          </div>

          <div className="installFormSectionRow">
            <div className="installFormSectionField">
              <label>{installFormText.formFields.companySize}</label>
              <select>
                <option>Select size</option>
                <option>Select size</option>
              </select>
            </div>
            <div className="installFormSectionField">
              <label>{installFormText.formFields.industry}</label>
              <select>
                <option>Select industry</option>
              </select>
            </div>
          </div>

          <div className="installFormSectionField">
            <label>{installFormText.formFields.country}</label>
            <input type="text" placeholder="Enter your Country" />
          </div>

          <div className="installFormSectionCheckbox">
            <input type="checkbox" id="updates" />
            <label htmlFor="updates">{installFormText.formFields.updates}</label>
          </div>
        </div>

        {/* Right: Downloads */}
        <div className="installFormSectionDownloads">
          {/* Windows */}
          <div className="installFormSectionCard">
            <div className="installFormSectionCardHeadingContainer">
              <div>
                <img className="installFormSectionCardIcon" src={installFormText.windows.icon}></img>
              </div>
              <div>
                <h3>{installFormText.windows.title}</h3>
                <p>{installFormText.windows.subtitle}</p>
              </div>
            </div>
            <div className="installFormSectionInternalCard">
              <h4 className="installFormSectionInternalCardTitle">{installFormText.docker.featuresTitle}</h4>
              <ul>
                {installFormText.windows.features.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <button className="windowsBtn">
              {installFormText.windows.button}
            </button>
          </div>

          {/* Docker */}
          <div className="installFormSectionCard">
            <div className="installFormSectionCardHeadingContainer">
              <div>
                <img className="installFormSectionCardIcon" src={installFormText.docker.icon}></img>
              </div>
              <div>
                <h3>{installFormText.docker.title}</h3>
                <p>{installFormText.docker.subtitle}</p>
              </div>
            </div>
            <div className="installFormSectionInternalCard">
              <h4 className="installFormSectionInternalCardTitle">{installFormText.docker.featuresTitle}</h4>
              <ul>
                {installFormText.docker.features.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <button className="dockerBtn">{installFormText.docker.button}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
