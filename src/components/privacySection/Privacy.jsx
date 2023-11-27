import React from 'react'
import "./Privacy.css"

function Privacy(props) {
  return (
   <>
   <div className={`Privacy ${props.mode ? '' : 'a'}`}>
    <h1>Privacy policy</h1>
    <p>Privacy Policy

This Privacy Policy governs the manner in which [Your Company Name] collects, uses, maintains, and discloses information collected from users (referred to as "Users") of the [Your Website/Platform] (referred to as "Site"). This policy applies to the Site and all products and services offered by [Your Company Name].

Information Collection
We may collect personal identification information from Users in various ways, including but not limited to when Users visit our Site, register on the Site, place an order, subscribe to the newsletter, fill out a form, or interact with other activities, services, features or resources we make available on our Site. Users may be asked for their name, email address, mailing address, phone number, or other relevant information. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us.

Information Use
We may collect and use Users' personal information for the following purposes:

To improve customer service: Information you provide helps us respond to your customer service requests and support needs more efficiently.
To personalize user experience: We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.
To improve our Site: We continually strive to improve our website offerings based on the information and feedback we receive from you.
To process transactions: We may use the information Users provide about themselves when placing an order only to provide service to that order.
To send periodic emails: We may use the email address to send User information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests.
Information Protection
We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Site.

Sharing Personal Information
We do not sell, trade, or rent Users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.

Third-Party Websites
Users may find advertising or other content on our Site that links to the sites and services of our partners, suppliers, advertisers, sponsors, licensors, and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site. Browsing and interaction on any other website, including websites that have a link to our Site, is subject to that website's own terms and policies.

Changes to this Privacy Policy
[Your Company Name] has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.

Your Acceptance of these Terms
By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.</p>
</div>
   </>
  )
}

export default Privacy