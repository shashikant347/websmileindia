// src/utils/websiteScreenshot.js
//
// Builds a live screenshot URL for a client's real website using WordPress's
// free public "mshots" screenshot service — no API key, no backend needed,
// just an <img src="..."> pointing at the client's URL. The service renders
// the actual live page and returns a JPG, so it always reflects the site's
// current homepage/hero design.
//
// Because it only captures one shot per request, `heroShot` and
// `sectionShot` request the SAME tall capture and use different width/height
// so plain <img> tags can crop different vertical bands of it (top = hero,
// middle, bottom) with CSS `object-position` — giving a "3 photos from the
// site" gallery without needing to guess sub-page URLs. Swap these for real
// screenshots any time by editing a study's `gallery` array in the data file.

const MSHOTS_BASE = 'https://s0.wp.com/mshots/v1/';

export const heroShot = (url, width = 1280, height = 800) =>
    `${MSHOTS_BASE}${encodeURIComponent(url)}?w=${width}&h=${height}`;

// Returns 3 crops (top/hero, middle, bottom) of the same homepage capture.
export const websiteSections = (url) => {
    const tall = `${MSHOTS_BASE}${encodeURIComponent(url)}?w=1280&h=2600`;
    return [
        { src: tall, position: 'top', label: 'Homepage — hero section' },
        { src: tall, position: 'center', label: 'Homepage — mid section' },
        { src: tall, position: 'bottom', label: 'Homepage — footer section' },
    ];
};
