document.addEventListener('DOMContentLoaded', () => {
    const newsGrid = document.getElementById('news-grid');
    if (!newsGrid) return;

    // Sample dataset covering 9 news items. Designed to populate backwards (9 down to 1) 
    // enforcing the correct image loading pattern specified.
    const newsData = [
        { id: 9, category: "ANNOUNCEMENT", catClass: "cat-maroon", date: "August 15, 2026", title: "Announcing the 2026 Convention Schedule", snippet: "Explore the comprehensive schedule for the upcoming Chinese American Convention featuring keynote speakers and engaging workshops.", link: "https://mp.weixin.qq.com/s/MqtF3pZge6TeVgnut93qeg?scene=1" },
        { id: 8, category: "EVENT", catClass: "cat-navy", date: "July 30, 2026", title: "Youth Leadership Summit Registration Open", snippet: "Join us for an inspiring youth leadership summit designed to empower the next generation of Chinese American leaders.", link: "https://mp.weixin.qq.com/s/d2V6_iBUA8VtDZWchRtn2w" },
        { id: 7, category: "WORKSHOP", catClass: "cat-gold", date: "June 12, 2026", title: "Civic Engagement Workshop Recap", snippet: "A successful workshop focusing on grassroots mobilization and community advocacy took place last weekend.", link: "https://mp.weixin.qq.com/s/zHmTfgHHzSDSctxE2tROxQ" },
        { id: 6, category: "ANNOUNCEMENT", catClass: "cat-maroon", date: "May 25, 2026", title: "Call for Convention Volunteers", snippet: "We are looking for dedicated volunteers to help make this year's convention a resounding success.", link: "https://mp.weixin.qq.com/s/CkM0ZYRGTBB_r0Mr1dugBA" },
        { id: 5, category: "EVENT", catClass: "cat-navy", date: "April 10, 2026", title: "Gala Dinner Ticket Sales", snippet: "Secure your spot at our annual gala dinner celebrating the achievements of our vibrant community.", link: "https://mp.weixin.qq.com/s/6G_dBLDEFQDqEIKex14xyQ" },
        { id: 4, category: "WORKSHOP", catClass: "cat-gold", date: "March 22, 2026", title: "Mental Health Awareness Panel", snippet: "Experts gathered to discuss strategies and resources for supporting mental health in the Asian American community.", link: "https://mp.weixin.qq.com/s/lVCQ8xK5Qw0ixFF1anDBfQ" },
        { id: 3, category: "ANNOUNCEMENT", catClass: "cat-maroon", date: "February 05, 2026", title: "New Partnerships for 2026", snippet: "We are thrilled to announce several new organizational partnerships that will strengthen our collective impact.", link: "https://mp.weixin.qq.com/s/1GB8QUUUGf3hPoIVS2vSiA" },
        { id: 2, category: "EVENT", catClass: "cat-navy", date: "January 18, 2026", title: "Lunar New Year Celebration Highlights", snippet: "Take a look back at the joyful festivities and cultural performances from our nationwide Lunar New Year events.", link: "https://mp.weixin.qq.com/s/x-HE2UQl4kBtu_eWTOSF8w" },
        { id: 1, category: "WORKSHOP", catClass: "cat-gold", date: "December 01, 2025", title: "End of Year Review and Planning", snippet: "Community leaders convened to reflect on the past year's successes and outline strategic goals for the future.", link: "https://mp.weixin.qq.com/s/8jOV_aNOlfzXcPp9FFo4_w" }
    ];

    // Limit cards if the data-limit attribute is present
    const limit = newsGrid.dataset.limit ? parseInt(newsGrid.dataset.limit) : newsData.length;

    // Dynamically inject cards into the DOM
    newsData.slice(0, limit).forEach(news => {
        const card = document.createElement('div');
        card.className = 'news-card';

        card.innerHTML = `
            <div class="card-visual">
                <img src="images/convention_news${news.id}.png" alt="${news.title}" loading="lazy">
                <span class="category-badge ${news.catClass}">${news.category}</span>
            </div>
            <div class="card-body">
                <span class="timestamp">${news.date}</span>
                <h3 class="card-title">${news.title}</h3>
                <p class="card-snippet">${news.snippet}</p>
                <a href="${news.link}" class="read-more">Read More <span class="material-symbols-outlined">chevron_right</span></a>
            </div>
        `;

        newsGrid.appendChild(card);
    });
});