---
layout: page
type: detail
title: Email signature
group: communication
permalink: /communication/email-signature.html
description: Create your Azavea email signature.


---

<!-- Copy/Paste Variables -->

<!-- Email Signature alone -->
{% capture email_signature %}
  First Name Last Name, Title  
  Azavea | 990 Spring Garden Street, 5th Floor, Philadelphia, PA  
  [youremail@azavea.com](mailto:youremail@azavea.com) | Phone Number  
  [Website](https://www.azavea.com/) | [Blog](https://www.azavea.com/blog/) | [GitHub](https://github.com/azavea) | [Twitter](https://twitter.com/azavea)
{% endcapture %}
{% assign email_signature = email_signature | markdownify %}

<!-- Optional mission statement text -->
{% capture optional_text %}
  Azavea is a [B Corporation](http://www.bcorporation.net/community/azavea) – our mission is to advance the state of the art in geospatial technology and apply it for civic, social, and environmental impact.
{% endcapture %}
{% assign optional_text = optional_text | markdownify %}

<!-- Join us text -->
{% capture join_text %}
  Azavea is a [B Corporation](http://www.bcorporation.net/community/azavea) – our mission is to advance the state of the art in geospatial technology and apply it for civic, social, and environmental impact. [Join us.](http://jobs.azavea.com/)
{% endcapture %}
{% assign join_text = join_text | markdownify %}

<!-- Full email signature text -->
{% capture full_text %}
  First Name Last Name, Title  
  Azavea &#124; 990 Spring Garden Street, 5th Floor, Philadelphia, PA  
  [youremail@azavea.com](mailto:youremail@azavea.com) &#124; Phone Number  
  [Website](https://www.azavea.com/) &#124; [Blog](https://www.azavea.com/blog/) &#124; [GitHub](https://github.com/azavea) &#124; [Twitter](https://twitter.com/azavea)

  Azavea is a [B Corporation](http://www.bcorporation.net/community/azavea) – our mission is to advance the state of the art in geospatial technology and apply it for civic, social, and environmental impact. [Join us.](http://jobs.azavea.com/)
{% endcapture %}
{% assign full_text = full_text | markdownify %}

<!-- End Copy/Paste Variables -->



We standardize our email signature to make sure our contacts have access to company information like our address, phone numbers, websites, and social media accounts.

## Edit your email signature
To edit your email signature, login to Gmail and navigate to “Settings”, “General”, and scroll to find the “Signature” section.

## Email signature sample
{% include copy-paste.html
  description = email_signature
%}

### Optional text
Add this text below the links in your email signature to help the people you’re communicating with understand what we do:

{% include copy-paste.html
  description = optional_text
%}

Include “B Corporation” as a link to our company profile on the B Corporation website.

You can also append “Join us.” as a link to the Azavea jobs website to help contacts find our open positions:
{% include copy-paste.html
  description = join_text
%}

### Full email signature sample with optional text
{% include copy-paste.html
  description = full_text
%}

## Details
### Email address
Set your email as a link: `mailto:youremail@azavea.com`

### Phone number
Add a "+" before the area code to create a clickable link: `+1-###-###-####`

### Links
Insert these links into your email signature.

- Website: [https://www.azavea.com/](https://www.azavea.com/)
- Blog: [https://www.azavea.com/blog/](https://www.azavea.com/blog/)
- GitHub: [https://github.com/azavea](https://github.com/azavea)
- Twitter: [https://twitter.com/azavea](https://twitter.com/azavea)
- Azavea jobs page: [http://jobs.azavea.com/](http://jobs.azavea.com/)

You can also add links to our other social media pages.

- Facebook: [https://www.facebook.com/Azavea/](https://www.facebook.com/Azavea/)
- LinkedIn: [https://www.linkedin.com/company/azavea/](https://www.linkedin.com/company/azavea/)
