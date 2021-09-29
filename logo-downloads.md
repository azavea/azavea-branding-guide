---
layout: page
type: detail
title: Logo downloads
url: /logo-downloads
description: Downloads page containing all company-related logos.

downloads:
    -
        title: "Fellowships"
        list:
            -
                title: "Azavea Open Source Fellowship"
                url: "/downloads/fellowship.zip"
            -
                title: "Azavea Summer of Maps"
                url: "/downloads/summer-of-maps.zip"
    -
        title: "Products and open source projects"
        list:
            -
                title: "Cicero"
                url: "/downloads/cicero.zip"
            -
                title: "Raster Foundry"
                url: "/downloads/rasterfoundry.zip"
            -
                title: "GroundWork"
                url: "/downloads/groundwork.zip"
            -
                title: "DistrictBuilder"
                url: "/downloads/districtbuilder.zip"
            -
                title: "GeoTrellis"
                url: "/downloads/geotrellis.zip"
            -
                title: "OpenTreeMap"
                url: "/downloads/opentreemap.zip"
            -
                title: "Raster Vision"
                url: "/downloads/raster-vision.zip"
            -
                title: "Temperate"
                url: "/downloads/temperate.zip"
            -
                title: "Climate API"
                url: "/downloads/climate-api.zip"
            -
                title: "OpenDataPhilly"
                url: "/downloads/opendataphilly.zip"
    -
        title: "Community"
        list:
            -
                title: "OpenDataVote"
                url: "/downloads/opendatavote.zip"
            -
                title: "GeoPhilly"
                url: "/downloads/geophilly.zip"

---

### <a href="/downloads/azavea-full-logo.zip" download>Azavea logotype and mark</a> <span class="fal fa-cloud-download"></span>
For more information and guidance about usage, refer to the [Logo Guidelines](/design/logo-guidelines)

{% for section in page.downloads %}
<h3>
    {{ section.title }}
</h3>

<ul>
{% for list-item in section.list %}
    <li>
        <a href="{{ list-item.url }}" download>
            {{ list-item.title }}
        </a>
        <span class="fal fa-cloud-download"></span>
    </li>
{% endfor %}
</ul>
{% endfor %}
