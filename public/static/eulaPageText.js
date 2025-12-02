export const eulaContent = `<h1>BUILDNINJA END USER LICENSE AGREEMENT</h1>

<p><strong>Effective Date:</strong> December 1, 2025</p>

<h3><strong>IMPORTANT: READ CAREFULLY BEFORE INSTALLING, COPYING, OR USING THIS SOFTWARE</strong></h3>
<p>
This End User License Agreement ("EULA" or "Agreement") is a legal agreement between you
("Licensee," "Customer," "You," or "Your") and GrapeCity India Private Limited ("Licensor,"
"Company," "We," "Us," or "Our") for the BuildNinja software product, including computer
software, associated media, documentation, and any updates or upgrades (collectively,
the "Software").
</p>

<p>
BY CLICKING "ACCEPT," DOWNLOADING, INSTALLING, OR OTHERWISE USING THE SOFTWARE, YOU
AGREE TO BE BOUND BY THE TERMS OF THIS EULA. IF YOU DO NOT AGREE, DO NOT INSTALL OR USE
THE SOFTWARE.
</p>

<h2>1. DEFINITIONS</h2>
<p>Software: The software program known as BuildNinja in binary form, including its documentation, upgrades provided pursuant to Section 6 of this Agreement, and any third-party software programs integrated with or made part of BuildNinja.</p>
<p>Server: The server part of Software that enables administration of User accounts, manages Build Agents, and performs other services as specified in the documentation.</p>
<p>Build Agent: An auxiliary part of the Software that performs functions requested by the Server as specified in the documentation.</p>
<p>Build Configuration: A set of build parameters and instructions defining how a software build should be executed on the Server.</p>
<p>Concurrent Agents: The maximum number of Build Agents that can execute build tasks simultaneously at any given time.</p>
<p>Grace Period: The 7-day period after license key installation during which the Software will continue to function even if there are licensing issues, allowing time to resolve any problems.</p>
<p>License Certificate: Evidence of a license provided by Licensor to Licensee in electronic or printed form.</p>
<p>License Key: A unique key-code that enables Licensee to run the Software. Only Licensor and/or its representatives are permitted to produce License Keys.</p>
<p>Professional Services: Remote assistance to migrate from existing CI/CD platforms to BuildNinja, including installation support and basic configuration to replicate existing workflows. Services are limited to migration assistance only. Licensor makes no representation or warranty regarding the availability, scope, or outcome of such services.</p>
<p>Shogun Edition License: A license to use Software subject to paragraph (b) of clause 3.1 of this Agreement.</p>
<p>Solo Edition License: A license to use Software subject to paragraph (a) of clause 3.1 of this Agreement.</p>
<p>Third-Party Software: Any software components, libraries, or modules owned by parties other than Licensor that are integrated with or made part of the Software.</p>
<p>User: Any person authorized by Licensee to use Software while performing duties within the scope of their employment or assignment with Licensee, including employees, independent contractors, and temporary workers.</p>
<p>User Data: All data, information, and content submitted or created by Licensee through the Software.</p>
<p>Personal Data: Information relating to an identified or identifiable natural person as defined under applicable data protection laws.</p>
<p>Confidential Information: Non-public information designated confidential or reasonably understood as such. Includes: for Licensor—Software (source code, algorithms, structure), documentation, trade secrets, business plans, pricing; for Licensee—User Data, business information.</p>

<h2>2. INTELLECTUAL PROPERTY RIGHTS</h2>

<h3>2.1 Ownership of Software</h3>
<p>The Software, including all intellectual property rights therein, is and shall remain the sole and exclusive property of GrapeCity India Private Limited. This Agreement conveys a limited license to use the Software, not ownership. Title, ownership rights, and intellectual property rights in and to the Software shall remain with the Licensor.</p>

<h3>2.2 Licensor's Intellectual Property</h3>
<p>Licensor owns all right, title, and interest in and to:</p>
<ol type="a">
  <li>The Software, including source code, object code, algorithms, structure, sequence, organization, architecture, and user interfaces;</li>
  <li>All copyrights, patents, trade secrets, trademarks, service marks, trade names, and other proprietary rights worldwide associated with the Software;</li>
  <li>All Documentation, specifications, designs, and technical materials;</li>
  <li>All modifications, enhancements, derivative works, improvements, and updates to the Software, whether created by Licensor or suggested by Licensee;</li>
  <li>All know-how, methodologies, processes, and technologies embodied in or utilized by the Software.</li>
</ol>

<h3>2.3 Injunctive Relief</h3>
<p>Licensee acknowledges that breach of this Section 2 may cause irreparable harm to Licensor for which monetary damages are an inadequate remedy. Accordingly, in addition to any other remedies available at law or equity, Licensor shall be entitled to seek injunctive and other equitable relief to prevent or restrain such breach.</p>

<h3>2.4 Survival</h3>
<p>The provisions of this Section 2 shall survive any termination or expiration of this Agreement.</p>

<h2>3. GRANT OF LICENSE</h2>
<p>Subject to the terms, conditions, and limitations in this Agreement, Licensor grants Licensee a limited, non-exclusive, non-transferable license to use Software as follows:</p>

<h3>3.1 License Rights</h3>

<p><strong>(a) Solo Edition License:</strong></p>
<ul class="inline-list-disc">
  <li>Install and run unlimited number of Servers</li>
  <li>Use up to 10 Users per installation</li>
  <li>Connect up to 3 Concurrent Agents per Server at no additional cost</li>
  <li>Purchase additional Concurrent Agents at published rates if more than 3 are needed</li>
  <li>Create up to 100 Build Configurations per Server</li>
  <li>Retain build history for 30 days</li>
  <li>Use any 1 SSO integration provider (Microsoft, GitLab, Bitbucket, GitHub, or Google)</li>
  <li>Receive community support</li>
</ul>

<p><strong>(b) Shogun Edition License:</strong></p>
<ul class="inline-list-disc">
  <li>Install and run unlimited number of Servers</li>
  <li>Use unlimited Users</li>
  <li>Connect unlimited Concurrent Agents per Server</li>
  <li>Create unlimited Build Configurations per Server</li>
  <li>Retain build history for extended periods subject to reasonable storage capacity limits</li>
  <li>Use all 5 SSO integration providers (Microsoft, GitLab, Bitbucket, GitHub, and Google)</li>
  <li>Receive priority business hours support</li>
  <li>Access 20 hours of remote CI/CD migration assistance (annual subscriptions only), once hours are exhausted, contact sales for additional services</li>
  <li>Receive free migration assistance (annual subscriptions only)</li>
</ul>

<p><strong>(c) General Rights (Both Editions):</strong></p>
<ul class="inline-list-disc">
  <li>Make backup copies of Software for archival purposes</li>
  <li>Benefit from 7-day Grace Period after license key installation to resolve any licensing issues</li>
</ul>

<h3>3.2 License Restrictions</h3>
<p>The following actions are strictly prohibited under this license. Licensee shall not:</p>
<ol type="I">
  <li>Sell, redistribute, encumber, give, lend, rent, lease, sublicense, or transfer Software or any portion thereof without prior written consent of Licensor</li>
  <li>Reverse engineer, decompile, disassemble, modify, translate, attempt to discover source code, or create derivative works from Software</li>
  <li>Use more Concurrent Agents than granted under the applicable license without purchasing additional licenses (Solo Edition) or without appropriate Shogun Edition licensing</li>
  <li>Use more Build Configurations per Server than allowed under Solo Edition License</li>
  <li>Use the same License Key for multiple Server installations</li>
  <li>Remove, alter, or obscure any proprietary or copyright notices in the Software</li>
</ol>

<h2>4. LICENSE REGISTRATION REQUIREMENT</h2>
<h3>Mandatory License Registration</h3>
<ol type="a">
<li>All users must register at www.grapehub.io and obtain a valid license key before first use. Software will not function without a valid license key.</li>
<li><strong>Solo Edition:</strong> Free license key (no payment required, perpetual)</li>
<li><strong>Shogun Edition:</strong> Paid license key (requires active subscription)</li>
</ol>
<h3>7-Day Grace Period</h3>
<p>
Following license key installation, the Software shall continue to operate for seven (7) days notwithstanding any licensing validation issues, during which period Licensee may resolve technical problems without service interruption.
</p>

<h3>Misuse of Free Solo Edition Keys</h3>
<p>
Licensee shall not misuse free Solo Edition license keys, including by creating multiple registrations, providing false or misleading information, circumventing registration limits, or using the keys for commercial, shared, bulk, or otherwise unauthorized purposes. Misuse shall constitute a material breach of this Agreement.</p>

<h3>Right to Suspend or Revoke License Keys</h3>
<p>

If Licensor determines, in its sole discretion, that any License Keys have been obtained, activated, or used fraudulently or in violation of this Agreement, Licensor may immediately suspend, deactivate, or revoke such License Keys without prior notice and without liability to Licensee.
</p>

<h3>Consequences of Misuse</h3>
<p>

In the event of misuse of free Solo Edition license keys, Licensor may charge the applicable commercial license fees for all unauthorized use, in addition to any other remedies available at law or in equity.
</p>

<h2>5. THIRD-PARTY SOFTWARE</h2>

<h3>5.1 Third-Party Components</h3>
<p>

Software may include Third-Party Software components subject to separate license terms. A complete list and licenses are provided in the LICENSE.txt file included with Software. Licensee is responsible for ensuring third-party licenses are compatible with their internal policies.</p>

<h3>5.2 Third-Party Disclaimers</h3>
<p>
LICENSOR PROVIDES NO WARRANTY, EXPRESS OR IMPLIED, FOR ANY THIRD-PARTY SOFTWARE COMPONENTS. Licensee agrees to comply with all applicable third-party license terms. Licensor bears no responsibility for Third-Party Software performance, support, or compatibility issues.
</p>

<h2>6. UPGRADES</h2>
<p>
Licensor will provide generally available Software upgrades as follows:
</p>
<ul class="inline-list-disc">
<li><strong>Solo Edition:</strong> Free upgrades during the term of this Agreement</li>
<li><strong>Shogun Edition:</strong> Free upgrades during a 1-year period following initial license purchase ("Upgrade Subscription"). Licensee may renew for additional 1-year periods by paying renewal fees on Licensor's website.</li>
</ul>
<p>
If Licensee elects not to renew Upgrade Subscription, Licensee retains the perpetual right to continue using the most recent version released during the applicable Upgrade Subscription term.</p>
<h2>7. FEES AND PAYMENT</h2>

<h3>7.1 License Fees</h3>
<p>
Licensee agrees to pay all fees specified in the License Certificate. Fees are due within 30 days from invoice date and are non-cancelable and non-refundable.
</p>

<h3>7.2 Pricing Structure</h3>
<p>
Indian customers receive INR pricing; global customers receive USD pricing; pricing is determined by business location.
</p>

<h3>7.3 License Compliance and Overuse</h3>
<p>
If Licensee exceeds authorized usage, Licensee must pay excess usage fees. Licensor may terminate this Agreement for non-payment.
</p>

<h3>7.4 Payment Methods</h3>
<p>
All payments must be made through secure channels designated by Licensor. Licensor is not liable for issues arising from unauthorized payment methods.
</p>

<h3>7.5 Audit Rights</h3>
<p>
Licensor may audit Licensee's Software use upon 30 days’ notice, not more than once annually unless prior audit revealed material non-compliance.
</p>

<h2>8. INDEMNIFICATION</h2>

<h3>8.1 Customer Indemnification</h3>
<p>
Licensee agrees to defend, indemnify, and hold harmless GrapeCity India Private Limited and its officers, directors, employees, and agents from any claims arising from:
</p>
<ol type="a">
  <li>Licensee's material breach of this Agreement</li>
  <li>Unauthorized distribution or sharing of the Software or License Keys</li>
</ol>

<h3>8.2 Mutual Indemnification Process</h3>
<p>
The indemnified party must promptly notify the indemnifying party, cooperate, and allow the indemnifying party to control defense and settlement.
</p>
<h2>9. DATA PROTECTION AND RETENTION</h2>

<h3>9.1 Data Collection</h3>
<ol type="a">
  <li>
    Licensee retains all rights to User Data. Licensor processes User Data solely to provide Software per Licensee's instructions.
  </li>
  <li>
    Software collects analytics data such as usage statistics, performance metrics, system information, error logs, IP addresses, and license validation data. Data collected does not include source code or build artifacts unless provided in error reports.
  </li>
  <li>
    Analytics is used for license validation, Software improvement, support services, feature development, and aggregated statistics.
  </li>
</ol>

<h3>9.2 Processing Roles</h3>
<ol type="a">
  <li>Licensee is data controller; Licensor is data processor for Personal Data in User Data.</li>
</ol>

<h3>9.3 Compliance</h3>
<ol type="a">
  <li>
    Parties comply with:
    Digital Personal Data Protection Act 2023 (India);
    IT Act 2000 (India);
    GDPR (EU);
    UK GDPR;
    CCPA/CPRA (California)
    and other applicable laws.
  </li>
  <li>
    Licensor shall:
    <ol type="i">
      <li>Implement appropriate security measures per Section 9.4;</li>
      <li>Ensure personnel confidentiality;</li>
      <li>Assist with data subject requests within 10 days;</li>
      <li>Notify Licensee of law enforcement disclosure requests unless prohibited;</li>
      <li>Assist with compliance obligations;</li>
      <li>Delete or return Personal Data upon termination per Licensee instructions;</li>
      <li>Provide compliance information and allow audits.</li>
    </ol>
  </li>
  <li>
    Sub-processors:
    Licensor will provide 30 days' notice of new sub-processors. Licensee may object within 15 days.
  </li>
  <li>
    Audits:
    Upon request, not more than annually, Licensor will provide certifications (ISO 27001, SOC 2) or audit summaries. If concerns remain, Licensee may conduct an audit at its expense.
  </li>
</ol>

<h3>9.4 Security Measures Implemented by Licensor</h3>
<ol type="a">
  <li>Encryption — TLS 1.2+ in transit, encryption at rest for sensitive data</li>
  <li>Role-based access controls and multi-factor authentication</li>
  <li>Firewalls and intrusion detection</li>
  <li>Continuous security monitoring</li>
  <li>Vulnerability management and patching</li>
  <li>Personnel background checks and training</li>
  <li>Physical data center controls</li>
  <li>Secure development practices</li>
</ol>

<h3>9.5 Data Retention</h3>
<ol type="a">
  <li>User Data retained during License Term + 30 days for retrieval. Analytics retained 24 months then deleted or anonymized.</li>
  <li>
    Within 30 days of termination, Licensor shall delete or return User Data per Licensee's written election and provide certification.
  </li>
  <li>Data may be retained longer as required by law.</li>
  <li>Backup data deleted within 90 days per standard rotation.</li>
</ol>

<h3>9.6 Data Location</h3>
<p>
BuildNinja is deployed on Customer’s infrastructure. Customer controls data location, storage, and backups.
Licensor only receives:
</p>
<ul>
  <li>Anonymous telemetry (if enabled)</li>
  <li>License validation data</li>
  <li>Support diagnostics when explicitly shared</li>
</ul>

<h2>10. LIMITED WARRANTY AND ENHANCED DISCLAIMERS</h2>
<p>
SOFTWARE IS PROVIDED "AS IS" AND WITHOUT WARRANTIES. LICENSOR DISCLAIMS ALL WARRANTIES,
INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
</p>
<p>
Licensor does not warrant uninterrupted or error-free operation. Performance may be affected by factors outside Licensor’s control.
</p>
<p>
Licensee is solely responsible for maintaining backups. Licensor is not liable for data loss.
</p>
<p>
Software is not suitable for safety-critical uses. Such uses are prohibited.
</p>

<h2>11. DISCLAIMER OF DAMAGES</h2>
<ol type="a">
  <li>
    TO THE MAXIMUM EXTENT PERMITTED BY LAW, LICENSOR WILL NOT BE LIABLE FOR ANY SPECIAL,
    INCIDENTAL, INDIRECT, CONSEQUENTIAL, OR SIMILAR DAMAGES (INCLUDING LOSS OF PROFITS,
    BUSINESS INTERRUPTION, LOSS OF DATA, OR OTHER PECUNIARY LOSS).
  </li>
  <li>
    LICENSOR'S TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY LICENSEE DURING THE
    12 MONTHS PRECEDING THE CLAIM.
  </li>
</ol>

<h2>12. EXPORT REGULATIONS AND COMPLIANCE</h2>

<h3>12.1 Export Control Compliance</h3>
<p>Licensee shall comply with all applicable Indian export control laws and any international sanctions.</p>

<h3>12.2 Restricted Use</h3>
<p>
Licensee will not export, re-export, or transfer Software to sanctioned countries, restricted territories,
or prohibited persons, or use Software for activities prohibited by export control regulations.
</p>

<h2>13. TERM AND TERMINATION</h2>

<h3>13.1 Term</h3>
<p>
Unless indicated otherwise in the License Certificate, each license is perpetual, subject to compliance with this Agreement.
</p>

<h3>13.2 Termination for Breach</h3>
<p>
Either party may terminate this Agreement for material breach not cured within 30 days of written notice.
</p>

<h3>13.3 Effect of Termination</h3>
<ol type="a">
  <li>Licensee must immediately stop using Software, uninstall it, and return/destroy Confidential Information.</li>
  <li>
    Licensor may disable Software upon 15 days’ notice (or immediately in emergencies or material breach).
  </li>
  <li>
    For 30 days post-termination, Licensee may request User Data export. After 30 days, data may be deleted per Section 9.5.
  </li>
</ol>

<h2>14. GENERAL</h2>

<h3>14.1 Dispute Resolution</h3>

<p><strong>a. Governing Law</strong></p>
<p>This Agreement is governed by Indian law. Courts in Delhi have exclusive jurisdiction.</p>

<p><strong>b. Arbitration</strong></p>
<p>
Either party may elect arbitration at Delhi International Arbitration Centre under Arbitration and Conciliation Act 1996.
Seat: Delhi. Language: English. Award is final. Proceedings are confidential.
</p>

<p><strong>c. Litigation</strong></p>
<p>
If arbitration is not resolved within 45 days (or extended period), either party may proceed to courts in Delhi.
Parties waive jurisdiction objections. Emergency injunctive relief is permitted.
</p>

<h3>14.2 Entire Agreement</h3>
<p>
This Agreement is the entire agreement and supersedes prior agreements on the subject matter.
</p>

<h3>14.3 Modifications</h3>
<p>
Licensor may update this Agreement with 30 days’ notice. Continued use after effective date constitutes acceptance.
</p>

<h3>14.4 Assignment Restrictions</h3>
<p>
Licensee may not assign without Licensor’s written consent. Unauthorized assignment is grounds for termination.
Licensor may assign due to mergers, acquisitions, or asset transfers.
</p>

<h3>14.5 Equitable Relief</h3>
<p>
Licensor may seek equitable relief for unauthorized disclosure or breach.
</p>

<h3>14.6 Severability</h3>
<p>
If any provision is invalid, the remaining provisions remain in effect.
</p>

<h2>15. FORCE MAJEURE</h2>

<ol type="a">
  <li>
    Neither party is liable for failure to perform (except payment obligations) caused by events beyond reasonable control:
    natural disasters, pandemics, war, terrorism, civil unrest, strikes, government actions, utility failures, fire, flood, earthquake.
  </li>
  <li>
    Affected party must notify the other, mitigate, and resume performance when possible.
  </li>
  <li>
    If Force Majeure persists over 60 days, the unaffected party may terminate. Licensor will refund prepaid fees pro-rata.
  </li>
</ol>

<h2>16. CONFIDENTIALITY</h2>

<h3>16.1 Obligations</h3>
<p>
Receiving Party shall protect Confidential Information using reasonable care, use it only for exercising rights
or performing obligations, and restrict access to those with a need-to-know under confidentiality obligations.
</p>

<h3>16.2 Permitted Disclosures</h3>
<p>
Disclosure is permitted to legal advisors, auditors, or as required by law with prompt notice unless prohibited.
</p>

<h3>16.3 Exclusions</h3>
<p>
Confidential Information excludes information that is:
publicly available, previously known, rightfully received from a third party, or independently developed.
</p>

<h3>16.4 Return</h3>
<p>
Upon request or termination, Confidential Information must be returned or destroyed. Retained copies must remain confidential.
</p>

<h3>16.5 Remedies</h3>
<p>
Unauthorized disclosure causes irreparable harm. Disclosing Party may seek injunctive relief.
</p>

<h3>16.6 Survival</h3>
<p>
Confidentiality obligations survive 5 years after termination; trade secrets survive indefinitely.
</p>

<h2>17. CONTACT INFORMATION</h2>

<p>GrapeCity India Private Limited</p>
<p>Address: A-15, Noida Sector 62, Uttar Pradesh, India</p>
<p>Email: hello@grapehub.io</p>
<p>Website: grapehub.io</p>

<p>
By using the Software, you acknowledge that you have read, understood, and agree to be bound by this Agreement.
</p>
`;
