document.addEventListener('DOMContentLoaded', () => {
    const mapContainer = document.getElementById('us-map-container');
    const tooltip = document.getElementById('chapter-tooltip');

    if (!mapContainer) return;

    // Configuration for Chapters
    const chapters = {
        "AZ": { name: "UCA Arizona" },
        "CT": { name: "UCA CT" },
        "IA": { name: "UCA IA" },
        "IL": { name: "UCA IL", url: "https://ucailexecutive.wixsite.com/ucail" },
        "MA": { name: "UCA MA" },
        "NJ": { name: "UCA NJ" },
        "CA": { name: "UCA SF" },
        "NV": { name: "UCA Vegas" },
        "WA": { name: "UCA WA" },
        "WI": { name: "UCA WI" },
        "WV": { name: "UCA WV" },
        "FL": { name: "Southwest Florida Chinese Association" }
    };

    // SVG Paths for US States (Standard Albers USA Projection)
    const statePaths = {
        "HI": "M 347.3,489.2 L 348.8,491.5 L 352.7,490.9 L 353.1,489.6 L 351.9,488.3 L 347.3,489.2 Z M 363.6,500.6 L 368.5,500.9 L 370.1,497.6 L 375.6,497.9 L 378.4,500.4 L 372.9,504 L 368.6,503.7 L 368.9,500.4 L 371,503.2 L 363.6,500.6 Z M 354.4,494.9 L 358.8,494.6 L 360.9,497.4 L 356.6,500.2 L 356.9,496.9 L 361.7,496.6 L 354.4,494.9 Z M 344.5,492.2 L 340.4,490.6 L 340.1,488 L 344.5,487.4 L 346.1,489.9 L 344.5,492.2 Z M 336.7,488.2 L 333.2,487.8 L 332.9,485.3 L 336.3,484.2 L 338.6,485.6 L 336.7,488.2 Z M 324.7,483.7 L 321.4,483.6 L 320.8,481.4 L 324.6,480.1 L 326.7,481.7 L 324.7,483.7 Z M 317.2,478.8 L 314.7,479.1 L 313.4,477.5 L 314.5,476.2 L 316.9,475.9 L 318.1,477 L 317.2,478.8 Z",
        "AK": "M 277.6,462.8 L 276.5,469.5 L 270.4,471.7 L 266,468.4 L 267.1,461.7 L 272.1,458.4 L 277.6,462.8 Z M 197.6,432.8 L 193.7,439.5 L 185.9,441.2 L 182.6,436.2 L 185.4,429.5 L 192.6,427.8 L 197.6,432.8 Z M 110.4,422.8 L 112.6,429.5 L 107.6,433.9 L 100.9,432.8 L 99.2,427.2 L 104.8,421.6 L 110.4,422.8 Z M 154.3,415.6 L 150.4,422.3 L 143.7,423.4 L 142,419 L 145.3,412.9 L 151.4,410.1 L 154.3,415.6 Z",
        "FL": "M 755.3,467.2 L 752,467.2 L 750.9,465 L 752,463.9 L 755.3,465 L 755.3,467.2 Z M 817.6,482.8 L 813.2,488.4 L 807.6,487.3 L 796.5,470.6 L 786.5,460.6 L 775.4,457.3 L 773.2,451.7 L 778.8,445 L 795.5,441.7 L 805.5,442.8 L 818.8,448.4 L 824.4,465.1 L 817.6,482.8 Z",
        "NH": "M 917.6,128.3 L 923.2,130.5 L 922.1,142.7 L 915.4,143.8 L 912.1,133.8 L 917.6,128.3 Z",
        "MI": "M 708.7,137.2 L 714.3,146.1 L 712.1,155 L 702.1,157.2 L 696.5,148.3 L 703.2,138.3 L 708.7,137.2 Z M 678.7,156.1 L 682,163.9 L 676.4,168.3 L 668.6,167.2 L 666.4,160.5 L 669.7,154.9 L 678.7,156.1 Z",
        "VT": "M 905.3,123.9 L 910.9,125 L 910.9,137.2 L 905.3,138.3 L 902,127.2 L 905.3,123.9 Z",
        "ME": "M 940.9,92.8 L 935.3,102.8 L 936.4,117.2 L 946.4,120.5 L 955.3,110.5 L 957.5,97.2 L 947.5,90.5 L 940.9,92.8 Z",
        "RI": "M 929.8,166.1 L 933.1,167.2 L 933.1,170.5 L 928.7,171.6 L 927.6,168.3 L 929.8,166.1 Z",
        "NY": "M 855.3,129.4 L 852,139.4 L 863.1,138.3 L 885.3,141.6 L 897.5,143.8 L 898.6,140.5 L 903,136.1 L 900.8,126.1 L 880.8,129.4 L 870.8,116.1 L 857.5,113.9 L 855.3,129.4 Z",
        "PA": "M 835.3,168.3 L 837.5,181.6 L 878.6,172.7 L 877.5,159.4 L 834.2,166.1 L 835.3,168.3 Z",
        "NJ": "M 884.2,171.7 L 880.9,181.7 L 883.1,190.6 L 889.8,189.5 L 892,179.5 L 887.6,169.5 L 884.2,171.7 Z",
        "DE": "M 875.3,198.3 L 876.4,205 L 882,203.9 L 880.9,197.2 L 876.5,196.1 L 875.3,198.3 Z",
        "MD": "M 843.1,192.8 L 852,193.9 L 857.6,198.3 L 867.6,196.1 L 860.9,187.2 L 850.9,185 L 839.8,187.2 L 843.1,192.8 Z",
        "VA": "M 825.3,208.3 L 823.1,215 L 839.8,221.7 L 859.8,220.6 L 869.8,218.4 L 856.5,205.1 L 843.2,200.7 L 829.9,205.1 L 825.3,208.3 Z",
        "WV": "M 805.3,201.7 L 810.9,210.6 L 822,212.8 L 827.6,203.9 L 824.3,193.9 L 814.3,191.7 L 807.6,197.3 L 805.3,201.7 Z",
        "OH": "M 770.9,178.3 L 773.1,192.7 L 789.8,199.4 L 803.1,195 L 800.9,181.7 L 787.6,171.7 L 774.3,173.9 L 770.9,178.3 Z",
        "IN": "M 730.9,183.9 L 733.1,206.1 L 743.1,207.2 L 746.4,196.1 L 740.8,179.4 L 730.8,180.5 L 730.9,183.9 Z",
        "IL": "M 695.3,178.3 L 698.6,205 L 708.6,211.7 L 715.3,198.4 L 712,175.1 L 698.7,174 L 695.3,178.3 Z",
        "CT": "M 918.7,157.2 L 925.4,158.3 L 926.5,151.6 L 920.9,150.5 L 918.7,157.2 Z",
        "WI": "M 663.1,128.3 L 662,140.5 L 668.7,153.8 L 682,157.1 L 688.7,153.8 L 685.4,140.5 L 675.4,127.2 L 665.4,125 L 663.1,128.3 Z",
        "NC": "M 815.3,238.3 L 822,251.6 L 855.3,250.5 L 862,240.5 L 845.3,230.5 L 822,233.8 L 815.3,238.3 Z",
        "DC": "M 860.9,201.7 L 863.1,200.6 L 862,198.4 L 859.8,199.5 L 860.9,201.7 Z",
        "MA": "M 915.3,146.1 L 919.7,152.8 L 930.8,150.6 L 929.7,143.9 L 916.4,142.8 L 915.3,146.1 Z",
        "TN": "M 720.9,252.8 L 727.6,259.5 L 774.3,258.4 L 777.6,248.4 L 760.9,245.1 L 724.2,250.7 L 720.9,252.8 Z",
        "AR": "M 650.9,278.3 L 652,296.1 L 668.7,299.4 L 678.7,292.7 L 672,276 L 655.3,274.9 L 650.9,278.3 Z",
        "MO": "M 647.6,218.3 L 650.9,245 L 670.9,251.7 L 684.2,245 L 680.9,228.3 L 670.9,211.6 L 654.2,210.5 L 647.6,218.3 Z",
        "GA": "M 778.7,288.3 L 792,305 L 805.3,301.7 L 802,285 L 788.7,275 L 778.7,281.7 L 778.7,288.3 Z",
        "SC": "M 808.7,261.7 L 812,271.7 L 825.3,275 L 832,265 L 825.3,255 L 808.7,258.3 L 808.7,261.7 Z",
        "KY": "M 740.9,221.7 L 747.6,231.7 L 774.3,228.4 L 777.6,218.4 L 760.9,211.7 L 744.2,218.4 L 740.9,221.7 Z",
        "AL": "M 745.3,291.7 L 748.6,311.7 L 758.6,315 L 765.3,311.7 L 758.6,288.4 L 745.3,289.5 L 745.3,291.7 Z",
        "LA": "M 647.6,328.3 L 646.5,345 L 663.2,351.7 L 683.2,348.4 L 679.9,338.4 L 666.6,335.1 L 659.9,325.1 L 649.9,326.2 L 647.6,328.3 Z",
        "MS": "M 715.3,291.7 L 718.6,313.9 L 725.3,317.2 L 732,313.9 L 728.7,290.6 L 715.3,289.5 L 715.3,291.7 Z",
        "IA": "M 617.6,178.3 L 616.5,191.6 L 623.2,208.3 L 643.2,207.2 L 646.5,190.5 L 639.8,177.2 L 619.8,176.1 L 617.6,178.3 Z",
        "MN": "M 600.9,118.3 L 604.2,138.3 L 617.5,158.3 L 634.2,155 L 630.9,135 L 620.9,118.3 L 604.2,115 L 600.9,118.3 Z",
        "OK": "M 557.6,278.3 L 556.5,291.6 L 573.2,298.3 L 599.9,295 L 596.6,278.3 L 559.9,277.2 L 557.6,278.3 Z",
        "TX": "M 517.6,298.3 L 507.6,325 L 527.6,358.3 L 560.9,375 L 577.6,358.3 L 567.6,345 L 554.3,308.3 L 537.6,295 L 520.9,293.9 L 517.6,298.3 Z",
        "NM": "M 427.6,288.3 L 430.9,325 L 464.2,321.7 L 460.9,285 L 427.6,283.9 L 427.6,288.3 Z",
        "KS": "M 537.6,231.7 L 540.9,249.5 L 577.6,246.2 L 574.3,229.5 L 537.6,228.4 L 537.6,231.7 Z",
        "NE": "M 517.6,188.3 L 520.9,206.1 L 557.6,202.8 L 554.3,186.1 L 517.6,185 L 517.6,188.3 Z",
        "SD": "M 507.6,148.3 L 510.9,166.1 L 547.6,162.8 L 544.3,146.1 L 507.6,145 L 507.6,148.3 Z",
        "ND": "M 497.6,108.3 L 500.9,126.1 L 537.6,122.8 L 534.3,106.1 L 497.6,105 L 497.6,108.3 Z",
        "WY": "M 397.6,158.3 L 400.9,186.1 L 434.2,182.8 L 430.9,156.1 L 397.6,155 L 397.6,158.3 Z",
        "MT": "M 347.6,98.3 L 346.5,108.3 L 353.2,128.3 L 406.5,125 L 403.2,98.3 L 349.9,95 L 347.6,98.3 Z",
        "CO": "M 407.6,228.3 L 410.9,256.1 L 447.6,252.8 L 444.3,226.1 L 407.6,225 L 407.6,228.3 Z",
        "ID": "M 307.6,118.3 L 314.3,135 L 321,155 L 341,151.7 L 331,135 L 324.3,118.3 L 307.6,115 L 307.6,118.3 Z",
        "UT": "M 337.6,218.3 L 340.9,255 L 367.6,251.7 L 370.9,235 L 357.6,231.7 L 354.3,215 L 337.6,213.9 L 337.6,218.3 Z",
        "AZ": "M 317.6,288.3 L 320.9,306.1 L 337.6,326.1 L 357.6,322.8 L 354.3,286.1 L 320.9,285 L 317.6,288.3 Z",
        "NV": "M 267.6,198.3 L 270.9,229.4 L 287.6,249.4 L 304.3,232.7 L 301,196 L 267.6,194.9 L 267.6,198.3 Z",
        "OR": "M 217.6,128.3 L 220.9,138.3 L 227.6,158.3 L 260.9,155 L 254.2,128.3 L 220.9,125 L 217.6,128.3 Z",
        "WA": "M 237.6,88.3 L 236.5,98.3 L 243.2,111.6 L 276.5,108.3 L 273.2,88.3 L 239.9,85 L 237.6,88.3 Z",
        "CA": "M 207.6,188.3 L 206.5,211.6 L 219.8,244.9 L 236.5,261.6 L 253.2,228.3 L 243.2,195 L 209.9,185 L 207.6,188.3 Z"
    };

    // Generate SVG
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "0 0 1000 600");
    svg.setAttribute("id", "us-map");

    // Render States
    for (const [stateCode, pathData] of Object.entries(statePaths)) {
        const path = document.createElementNS(svgNS, "path");
        path.setAttribute("d", pathData);
        path.setAttribute("id", stateCode);
        path.setAttribute("class", "state");
        
        // Check if state has a chapter
        if (chapters[stateCode]) {
            path.classList.add("has-chapter");
            path.setAttribute("data-chapter", chapters[stateCode].name);
            
            // Event Listeners for Tooltip
            path.addEventListener('mouseenter', (e) => {
                const chapterName = chapters[stateCode].name;
                tooltip.textContent = chapterName;
                tooltip.style.display = 'block';
            });

            path.addEventListener('mousemove', (e) => {
                tooltip.style.left = (e.clientX + 15) + 'px';
                tooltip.style.top = (e.clientY + 15) + 'px';
            });

            path.addEventListener('mouseleave', () => {
                tooltip.style.display = 'none';
            });

            // Click Event
            path.addEventListener('click', () => {
                if (chapters[stateCode].url) {
                    window.open(chapters[stateCode].url, '_blank');
                }
            });
        }

        svg.appendChild(path);
    }

    mapContainer.appendChild(svg);

    // --- Community Partners Logic ---
    const partnersGrid = document.getElementById('partners-grid');
    const togglePartnersBtn = document.getElementById('toggle-partners-btn');

    if (partnersGrid && togglePartnersBtn) {
        const partners = [
            "1882 Foundation",
            "American TCM Association",
            "Alliance of Chinese Americans (San Diego)",
            "Arizona Chinese History Association",
            "Asian Culture And Education Society USA",
            "Carolina Chinese Chamber of Commerce",
            "Carolina Chinese Civic Center",
            "Chinese American Association in Colorado",
            "Chinese American Friendship Association (CAFA) of NC",
            "Chinese Intercultural Association",
            "Coalition for A Better Chinese American Community (CBCAC)",
            "Great Philly Chinese Association",
            "Great San Antonio Society of Chinese Professionals",
            "Iowa City Chinese American Association",
            "Kentucky Chinese American Association",
            "Legal Immigration Alliance (CA)",
            "Madison Chinese Community Organization",
            "Massachusetts General Hospital MGH Center for Cross-Culture Student Emotional Wellness",
            "Milwaukee Chinese Community Center (MCCC)",
            "Montana Chinese American Association",
            "Nevada Chinese Association",
            "New England Chinese Alliance",
            "NYU Pearl Institute",
            "Ohio Chinese American Association",
            "Pittsburgh Chinese Culture Center",
            "South Carolina Chinese Association",
            "South Dakota Sioux Falls Chinese American Association",
            "The Friendship Association of Portland",
            "Utah Chinese Association",
            "Vancouver Chinese Association",
            "Wyoming Chinese Association"
        ];

        const initialPartnerCount = 6;
        let isPartnersExpanded = false;

        function renderPartners(count) {
            partnersGrid.innerHTML = '';
            const partnersToShow = partners.slice(0, count);

            partnersToShow.forEach(partner => {
                const item = document.createElement('div');
                item.className = 'partner-item';
                item.textContent = partner;
                partnersGrid.appendChild(item);
            });
        }

        // Initial render
        renderPartners(initialPartnerCount);

        togglePartnersBtn.addEventListener('click', () => {
            if (isPartnersExpanded) {
                renderPartners(initialPartnerCount);
                togglePartnersBtn.textContent = 'Show More';
                // Optional: scroll back to top of partners section
                document.querySelector('.partners-section').scrollIntoView({ behavior: 'smooth' });
            } else {
                renderPartners(partners.length);
                togglePartnersBtn.textContent = 'Show Less';
            }
            isPartnersExpanded = !isPartnersExpanded;
        });
    }
});