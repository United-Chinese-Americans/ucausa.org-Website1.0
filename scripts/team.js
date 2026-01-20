document.addEventListener('DOMContentLoaded', () => {
    const boardGrid = document.getElementById('board-grid');
    const toggleBtn = document.getElementById('toggle-board-btn');

    // --- Board of Directors Logic ---
    if (boardGrid && toggleBtn) {
        const boardMembers = [
            {
            name: "Hua Wang PhD 王华",
            title: "Chair, National Board of Directors",
            intro: "Dr. Hua Wang’s professional experience has spanned academia, government and industry. He is currently a faculty member and an administrator at Boston University. He was a research scientist with United Technologies Research Center, a faculty member with Duke University, and a program manager with the U.S. Army Research Office. He was a recipient of various professional awards, an author of numerous technical publications and has served on many editorial and conference boards. He has been active in serving the community – local and beyond. He is the President of the Chinese American Association of Lexington (CAAL) and serves on the boards of Lexington Historical Society and Cary Memorial Library Foundation. He was a founding board member of the Community Endowment of Lexington (CEL) and served in the past two superintendent search committees. Beyond Lexington, he serves on the national board of UCA and as Treasury of UCA-MA. He is also the founding Co-chair of New England Chinese American Alliance (NECAA)."
        },
        {
            name: "Haipei Shue 薛海培",
            title: "President, Board member",
            intro: "Haipei Shue(薛海培) is the president of United Chinese Americans (UCA), the largest Chinese American coalition in U.S. Haipei Shue came to University of Wisconsin-Madison for a graduate study of sociology in 1987. In early 90’s he was one of the “student lobbyists” responsible for the passage of “Chinese Student Protection Bill”; from 2009 to 2013, he is instrumental in the passage of Congressional apology resolutions for “Chinese Exclusion Act”. He worked for 4 years as Phoenix TV international affairs commentator. In December 2023, he successfully worked to secure the White House Resolution on 80th Anniversary of the Repealing of Chinese Exclusion Act, on behalf of UCA and Chinese American community."
        },
        {
            name: "Jinliang Cai 蔡金良",
            title: "Board Member",
            intro: "Jinliang Cai was born in Beijing, China. He came to the USA as a student in 1986 and has lived in Pittsburgh and Memphis. He has been actively engaged in community organizations for many years including Organization of Chinese Americans Pittsburgh Chapter, Greater Memphis United Chinese Association, Memphis Chinese Language School, Memphis In May Festival, Chinese Historical Society in Memphis, Tennessee Chinese American Alliance, and United Chinese Americans."
        },
        {
            name: "Jing (Gene) Chang 常劲",
            title: "Board Member, Chair of Board Fundraising Committee",
            intro: "Jing (Gene) Chang 常劲 was born in China. He went to Peking University in 1986. In 1990, he came to the United States to study. In 1993, he got his BS degree in Physics from University of San Francisco. In 1996, he got his MBA degree from Columbia Graduate School of Business. Gene is currently a Managing Director/COO of Himalaya Capital, a multi-billion-dollar value investing firm based in Seattle. He is an Honorary Chairman of Chinese CEO Organization. He serves on the board of Seattle Public Library Foundation and Peking University Alumni Association (Global). Gene Chang is a large board member and currently serves as the Chair of UCA Board Fundraising Committee."
        },
        {
            name: "Lily Chen 陈健",
            title: "Senior Advisor of Executive Team, Director of WAVES program",
            intro: "Jian (Lily) Chen is a nationally Certified Nurse Educator, passionate community organizer, mental health advocate, and mental health disparity researcher. She started her community work in the Chicago Chinese Community more than a decade ago, promoting public health especially in the underserved communities. She successfully coordinated multiple national and local programs including the UCA Youth Mental Health Collaborative WAVES (Wellness, Advocacy, Voices, Education, Support) since 2016 to promote Mental Health in AAPI communities. She served on steering committees of the 2016, 2018, and 2022 National Chinese American Conventions in her capacity as the former Executive Director of UCA, founding President of UCA Illinois Chapter, and Convention Director. She is a Robert Woods Johnson Foundation (RWJF) Clinical Scholar fellow, Project Director for Mental Health First Aid Training in Chinese Americans (MHFA – CA) funded by Service Administration of Mental Health and Substance Abuse(SAMHSA), US Department of Health and Human Services. She currently teaches at North Carolina Central University Department of Nursing, directs the UCA WAVES program, and is a PhD student in Nursing at University of North Carolina Chapel Hill. She also serves as the Vice Chair of the Senior Advisory Board for the town of Cary, and as a member of the Health and Human Service Board of Wake County, North Carolina. She is married with five wonderful adult children and a beautiful granddaughter."
        },
        {
            name: "Jack Ding",
            title: "Board member",
            intro: "Born in Jiangsu, China, Jack Ding came to America in 1993 for college study. Like most immigrants he worked his way from the bottom up putting himself through school by doing dishes in restaurants. In 1995 he completed his MBA at Dominican University and started working in PC industry in Silicon Valley. In 2008 he received his citizenship at Oakland Paramount Theater. Mr. Ding is an Enrolled Agent with the IRS which is a federally authorized tax practitioner. He is the founder and president of Unicom Tax Services in Sonoma, CA with focus on tax representation to help small business and individuals to solve tax problems to be compliant with the federal and state tax laws. He has been an outspoken advocate for taxpayers, traveling to the United States’ Capitol on multiple occasions on tax reforms and increasing funds for the IRS. Mr. Ding has deeply been involved in community services and volunteering. He was elected as the city council in 2020 and become Sonoma Mayor of 2022. He is a central committee member of California Democratic Party. Mr. Ding is a recipient of Congressman Mike Thompson “American Dream Award’ in 2023."
        },
        {
            name: "Jason Dong 董校铭",
            title: "Board Member",
            intro: "Jason Dong 董校铭 is the president of United Chinese Association of Utah, has been very active in Chinese, Asian and multicultural communities for the past many years. He had served on numerous boards and committees at local, state and national levels. Jason has been a driving force to make differences in many cultural and heritage events specifically in Utah. Jason started his career in the software industry. He has been an evangelical thought leader in several areas including software engineering, security, AI and machine learning, and held patents in networking and security areas. He graduated from Peking University in China and Ohio University in Ohio. Jason Dong is an UCA board member, serves as a representative of UCA community partner."
        },
        {
            name: "Xiaohong Gao",
            title: "Board Member",
            intro: "Xiaohong Gao came to the USA in the 1980s as a visiting fellow sponsored by the American Psychological Association (APA) to conduct research in Child Development and Social Policy at Yale University. She is an educational measurement professional with three decades of industrial experience and was a Principal Research Associate and Senior Director at a leading educational testing company. She is a long-time UCA volunteer and currently serves as WAVES Research Director supporting the Youth Mental Health Collaborative. She has helped with the program development and evaluation including obtaining the federal grant for the Mental Health First Aid training. She is also a dedicated volunteer in her local community of Iowa City, IA, and has volunteered for the Iowa City Area Chinese Association, as well as served on its Board of Directors, throughout the years."
        },
        {
            name: "Larry He",
            title: "Board Member",
            intro: "Larry He is a community activist living in Brooklyn, NY and serves as Co-Chief-of-Staff to New York State Assemblyman William Colton, with whom he interned as a Graduate Scholar in 2006. Larry currently also serves as Task Force Coordinator and is a leading force in the community’s fight against the proposed 86th street homeless shelter. Dr. He has an extensive community serving records, including National Governing Board Member of Asian and Pacific Islanders American Public Affairs Association (APAPA), Board Member of United Chinese Americans, Board Chair and President of the Chinese Community Center of the Capital Region of New York, Executive Director of the Global Asian Carp Coalition, Student Senator at Rensselaer Polytechnic Institute. As a trained economist, Dr. He previously also served as Senior Analyst for New York Independent System Operator and California Independent System Operator, both of which are public-interest, not-for-profit corporations that oversee the operation of two of America’s largest electric power systems and electricity markets. Larry He holds a Ph.D. in Ecological Economics from Rensselaer Polytechnic Institute."
        },
        {
            name: "Li Weaver",
            title: "Board Member",
            intro: "Li Weaver is the Managing Partner of J C Business Group, an international business consultancy based in Nashville, Tennessee. Ms. Weaver has 25 years of experience developing and implementing business strategies for multinational companies operating in the Pacific Rim. Ms. Weaver is passionate about community development and civic engagement. She served as the President and Board Chair of the Greater Nashville Chinese Association and helped GNCA grow into a major organization serving the Chinese community in the Middle TN region. She also served as a trustee and DEI Committee Chair for Oak Hill School in Nashville and a board member of YMCA Camp Widjiwagan. Born in China, Ms. Weaver earned a BA from Beijing International Studies University and received an MBA in the United States. Li Weaver is an at-large UCA board member and a member of the UCA Governance Committee."
        },
        {
            name: "Hardy Li 黎观城",
            title: "Board Member",
            intro: "Hardy Li is the Chairman of CONPAC Group, an engineering, architectural, real estate development, farming, and manufacturing conglomerate based in the US PNW. Formerly working for two of the leading international engineering firms, Hardy managed over 50 major public infrastructure projects including 16 light rail and streetcar projects throughout the States and Central America. Hardy has involved in community services for over 2 decades. He is the founding member of UCA, currently Chairman of the Board of UCA Washington. He served as 2 term presidents of the Chinese Friendship Association of Portland; is Chairman of the Portland Chinese (Golf) Open."
        },
        {
            name: "Paul Li 李秋波",
            title: "Board Member",
            intro: "Paul Li is the founder of Calvin J Li Memorial Foundation, whose mission is to help bridge the cultural gap between Asian immigrant parents and their American-born children, raise the awareness of emotional wellbeing of the children, and promote a supportive social and family environment for the children to reach their full potential. He also serves as a member of the Board of Directors for United Chinese Americans, and Chinese Culture and Community Service Center (CCACC). Paul is also the founder of FHL Investment Management Company, serving investment needs for individuals and institutions. Previously he was a partner and senior equity analyst at Brown Advisory, a Baltimore-based investment management company. Paul obtained his Ph. D and MBA from Cornell University, a Master’s degree from Chinese Academy of Sciences, and A Bachelor’s degree from Wuhan University. Paul came to the US in 1991 from China. He now lives with his wife and daughter in Rockville Maryland."
        },
        {
            name: "Ray Liang 梁瑞凤",
            title: "Executive Director",
            intro: "Dr. Ray Liang (梁瑞凤) is the managing director of an NSF-sponsored composites research center at West Virginia University. A graduate of Tsinghua University, he received his PhD degree from the Chinese Academy of Sciences Institute of Chemistry and worked there as a professor prior to moving to the United States. Dr. Liang attended the Inaugural UCA Convention 2016, co-organized the 2nd Convention 2018 and attended the 3rd Convention 2022. He was one of the key founding board members of UCA, who established UCA Finance and served as treasurer since its incorporation and till Dec 2021."
        },
        {
            name: "Bonnie Liao 廖冰",
            title: "Board Member",
            intro: "Bonnie Liao is the founder of two nonprofit schools and two nonprofit summer programs. She has served as the general advisor since 2004 for the PCE (Parents and Children Education) Club, a parenting group in New Jersey. Bonnie has been giving EQ Parenting talks and conducting youth leadership trainings nationwide. Her professional interest is mental and behavioral health for youth and families. As a graduate of Peking University, Bonnie also has a PhD degree in Physics from University of Houston and an MBA in Finance and Managing Information Systems from Rutgers University. In 2019, she became a licensed social worker in clinical psychological counseling."
        },
        {
            name: "Steven Lin 林青",
            title: "Board Member",
            intro: "Born in May 29,1976 in Lianjiang County, Fujian Province, and moved to the United States in 1999. Engages in foodservice and financial industry, and contracted with Huntsville Hospital, as a chef and business owner, for ten years. At present, resides in Huntsville, Alabama, and became a board member of the Huntsville Chinese Association (HCA) in 2014 before achieving the position of President of the board in 2018."
        },
        {
            name: "Shirley Ma 马晓红",
            title: "Board Member",
            intro: "Shirley Ma, born in Shenyang Liaoning, China. She moved to the USA in 1995. She has demonstrated herself as a dedicated community volunteer and leader. Shirley joined the UCA national board in 2017 and has been an active and dedicated founding member of this organization. She has been serving as the Secretary of the Board and leading the committee of UCA Donor and Member Services. She has been the key member supporting UCA national operations and programs, UCA conventions and local outreaching activities, UCA donor database maintenance and donor following up services. She now is a senior scientist working in the area of drug development for cancer immune-therapy in the SF Bay Area."
        },
        {
            name: "Steven Pei 白先慎",
            title: "Board Member, Chair of Governance Committee",
            intro: "Steven Pei is an Electrical Engineering Professor, the Executive Director of the Southwest Public Safety Technology Center founded by the Congress and a member of the faculty senate at the University of Houston. He was born in Guilin and grew up in Taiwan. Prior to joining academia, he was a department head at AT&T Bell Laboratories, Murray Hill, NJ. In Houston, he co-founded the first Asian American PAC in Texas in 2000 and served as its president. He was also a member of the founding boards of several APA and environmental organizations including the founding chair of United Chinese Americans."
        },
        {
            name: "Hong Qiu 丘红",
            title: "Board Member",
            intro: "Hong Qiu is an IT technologist at a global banking and financial service company. She holds a Ph.D. degree in Chemistry from the Ohio State University. Dr. Qiu is passionate about community service and is devoted to the local community. She has been a long time volunteer at her local school district, promoting a positive Asian community image, and connecting the Chinese community to the City and the school district. Dr. Qiu works tirelessly to develop youth into leaders of tomorrow. She leads the successful APAPA Ohio Youth program through Ohio, where youth are civically engaged early, through youth chapter and summer internship."
        },
        {
            name: "Yinong Shen 沈一农",
            title: "UCA Treasure, Chair of Finance Committee, Vice Chair of Governance Committee",
            intro: "Yinong Shen 沈一农 is a technical expert in a US automobile manufacturer. Yinong has acted in various capacities in community organizations. Yinong Shen served as a board member of a local Chinese school for a long time, and many years as its chairman. The school was served by many volunteers that ran a clean and efficient operation that served the community well. He was elected to the board of the Chinese Association of Greater Detroit where He worked in various special events, by-laws, non-profit filing, business development, etc. He has served as a UCA board member, in the election subcommittee, governance committee, bylaw working group, etc. Yinong Shen is an at large UCA board member, UCA Treasurer& Chair of Finance Committee and Vice Chair of UCA Governance Committee."
        },
        {
            name: "Venghan “Winnie” Tang 邓咏娴",
            title: "Board Member",
            intro: "Venghan “Winnie” Tang 邓咏娴 is a community Advocate, for over 25 years, Winnie serves the Chinese, Asian and the community-at-large in South Florida and beyond, with various leadership roles. She organizes programs from youth to elders for social & civic activities, to advocate on their behalf and to enable access to a comprehensive network of culturally sensitive & linguistically appropriate programs & services to enhance their quality of life. In 2021, Winnie started another new milestone: to produce and host the first-ever Asian-operated bilingual radio show – ACE Talk – to promote dialogue exchanges with a unified voice to encourage active civic engagement and to enrich community experiences in South Florida and beyond. Winnie Tang is an at large UCA board member."
        },
        {
            name: "Jan (Jian) Xie 解健",
            title: "Secretary of Board",
            intro: "Jan (Jian) Xie (解健) is an educator, photographer, and community leader dedicated to promoting Asian culture, education, and unity. She is the Founder and President of the Asian Culture and Education Society USA (ACAESUSA) and Treasurer of the Asian American Unity Coalition (AAUC). Jan serves on multiple nonprofit boards, including SafeHorns, the Gendercide Awareness Project, Destination Imagination Dallas Region, and the ACP Foundation. Her leadership and volunteer work focus on empowering youth, fostering cultural understanding, and supporting diverse communities across the U.S. Jan Xie is an At-Large Board Member, Secretary, and Executive Team Member of United Chinese Americans (UCA)."
        },
        {
            name: "Gary Yu 俞国梁",
            title: "Board Member",
            intro: "President of the Massachusetts Chapter of the United Chinese American(UCA). Chair of New England Chinese American Alliance (NECAA). President of the Boston Chapter of the Asian Pacific Islander American Public Affairs Association (APAPA). Founder and CEO of Boston International Media Consulting and Boston Asian Radio & TV."
        },
        {
            name: "Yingchao Zhang 张迎潮",
            title: "Board Member",
            intro: "Yingchao Zhang 张迎潮 Dr. Yingchao Zhang has been deeply involved in local public and community services in New Jersey. He is a former BOE Member of WW-P Regional School District, and a former Councilman for West Windsor, New Jersey. He served as the Board President of Central Jersey Chinese American Association. He was twice Board Chair for HUAXIA Plainsboro Chinese School. Professionally, he is an experienced technology executive, currently a partner and Global Head of Solutioning for Singularity Systems Inc. He obtained his PhD in physics from Stony Brook University. He got his B.S. from the University of Science and Technology of China. Yingchao Zhang is an at large UCA board member."
        },
        {
            name: "Weihua Yan",
            title: "Board Member",
            intro: "Weihua studied physics and computer science at Bowdoin and Brown, built online banking systems on Wall Street, founded Suryani International (e-commerce), and co-founded Diapers.com/Quidsi (acquired by Amazon). He later became founding CTO of Wonder, a restaurant-to-home food platform. A 16-year Great Neck resident with his wife and two sons, he has led the Great Neck Library board, volunteers with Boy Scouts and GNCA, loves the outdoors, and in 2023 ran for Nassau County Legislature, energizing Asian American civic participation."
        },
        {
            name: "Saichang Xu 徐赛嫦",
            title: "Board Member",
            intro: "Saichang Xu is a respected solo attorney in greater Chicago and a dedicated leader in Chinese American civic life. She provides pro bono counsel to the Chinese American Association at Greater Chicago, the Association of Chinese American Scientists and Engineers, Chinese schools, and other nonprofits. Xu is president of UCA Illinois and chairs the Greater Chicago Zhejiang University Alumni Association. She led UCA’s 2024 Jiaozi Fest (1,000+ attendees) and received the 13th Annual U.S. Congressional Civic Engagement Award. Through her legal work and leadership, she advances cultural heritage, inclusion, and public service."
        },
        {
            name: "Charles K. Tsui 徐国富",
            title: "Board Member",
            intro: "Charles was born in Shanghai, raised in Hong Kong, and came to the U.S. in 1972 to attend the University of Maryland, earning a B.S. in Business Management (1977). He moved to Phoenix in 1979, built a successful Chinese restaurant group over two decades, then shifted to insurance in 2000. A civic entrepreneur, he founded the Arizona Asian American Association, OCA Phoenix Chapter, Phoenix Dragon Lions Club, Arizona Chinese Restaurant Association, Chinese Week, and the Arizona Asian Festival—organizations that continue after 30+ years. He also served as Phoenix Sister City Chengdu Chair and as an Arizona Racing Commissioner for over a decade. In 2020 he launched the Chinese American Foundation of Arizona and co-founded UCA Arizona in 2022. Retired from commercial and personal insurance in 2022, he now focuses on helping community members access health care. Charles is married to Grace Lau and has one daughter and three grandsons."
        }
        ];

        const initialCount = 3;
        let isExpanded = false;

        function renderCards(count) {
            boardGrid.innerHTML = '';
            const membersToShow = boardMembers.slice(0, count);

            membersToShow.forEach((member, index) => {
                const card = document.createElement('div');
                card.className = 'board-card';

                // Image URL logic: team1.png, team2.png, etc.
                const imgUrl = `https://storage.googleapis.com/objects.ucausa.org/team/team${index + 1}.png`;

                card.innerHTML = `
                    <img src="${imgUrl}" alt="${member.name}" loading="lazy">
                    <div class="card-info">
                        <h3>${member.name}</h3>
                        <h4>${member.title}</h4>
                        <p>${member.intro}</p>
                    </div>
                `;
                boardGrid.appendChild(card);
            });
        }

        // Initial render
        renderCards(initialCount);

        toggleBtn.addEventListener('click', () => {
            if (isExpanded) {
                // Show Less
                renderCards(initialCount);
                toggleBtn.textContent = 'Show More';
                // Optional: Scroll back to top of section
                const section = document.querySelector('.board-section');
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // Show More
                renderCards(boardMembers.length);
                toggleBtn.textContent = 'Show Less';
            }
            isExpanded = !isExpanded;
        });
    }

    // --- Executive Team Logic ---
    const executiveGrid = document.getElementById('executive-grid');
    const toggleExecutiveBtn = document.getElementById('toggle-executive-btn');

    if (executiveGrid && toggleExecutiveBtn) {
        const executiveMembers = [
            { name: "Hua Wang PhD 王华", title: "Chair, National Board of Directors", intro: "Dr. Hua Wang’s professional experience has spanned academia, government and industry. He is currently a faculty member and an administrator at Boston University. He was a research scientist with United Technologies Research Center, a faculty member with Duke University, and a program manager with the U.S. Army Research Office. He was a recipient of various professional awards, an author of numerous technical publications and has served on many editorial and conference boards. He has been active in serving the community – local and beyond. He is the President of the Chinese American Association of Lexington (CAAL) and serves on the boards of Lexington Historical Society and Cary Memorial Library Foundation. He was a founding board member of the Community Endowment of Lexington (CEL) and served in the past two superintendent search committees. Beyond Lexington, he serves on the national board of UCA and as Treasury of UCA-MA. He is also the founding Co-chair of New England Chinese American Alliance (NECAA)." },
            { name: "Haipei Shue 薛海培", title: "President, Board member", intro: "Haipei Shue(薛海培) is the president of United Chinese Americans (UCA), the largest Chinese American coalition in U.S. Haipei Shue came to University of Wisconsin-Madison for a graduate study of sociology in 1987. In early 90’s he was one of the “student lobbyists” responsible for the passage of “Chinese Student Protection Bill”; from 2009 to 2013, he is instrumental in the passage of Congressional apology resolutions for “Chinese Exclusion Act”. He worked for 4 years as Phoenix TV international affairs commentator. In December 2023, he successfully worked to secure the White House Resolution on 80th Anniversary of the Repealing of Chinese Exclusion Act, on behalf of UCA and Chinese American community." },
            { name: "Jinliang Cai 蔡金良", title: "Board Member", intro: "Jinliang Cai was born in Beijing, China. He came to the USA as a student in 1986 and has lived in Pittsburgh and Memphis. He has been actively engaged in community organizations for many years including Organization of Chinese Americans Pittsburgh Chapter, Greater Memphis United Chinese Association, Memphis Chinese Language School, Memphis In May Festival, Chinese Historical Society in Memphis, Tennessee Chinese American Alliance, and United Chinese Americans." },
            { name: "Jing (Gene) Chang 常劲", title: "Board Member, Chair of Board Fundraising Committee", intro: "Jing (Gene) Chang 常劲 was born in China. He went to Peking University in 1986. In 1990, he came to the United States to study. In 1993, he got his BS degree in Physics from University of San Francisco. In 1996, he got his MBA degree from Columbia Graduate School of Business. Gene is currently a Managing Director/COO of Himalaya Capital, a multi-billion-dollar value investing firm based in Seattle. He is an Honorary Chairman of Chinese CEO Organization. He serves on the board of Seattle Public Library Foundation and Peking University Alumni Association (Global). Gene Chang is a large board member and currently serves as the Chair of UCA Board Fundraising Committee." },
            { name: "Lily Chen 陈健", title: "Senior Advisor of Executive Team, Director of WAVES program", intro: "Jian (Lily) Chen is a nationally Certified Nurse Educator, passionate community organizer, mental health advocate, and mental health disparity researcher. She started her community work in the Chicago Chinese Community more than a decade ago, promoting public health especially in the underserved communities. She successfully coordinated multiple national and local programs including the UCA Youth Mental Health Collaborative WAVES (Wellness, Advocacy, Voices, Education, Support) since 2016 to promote Mental Health in AAPI communities. She served on steering committees of the 2016, 2018, and 2022 National Chinese American Conventions in her capacity as the former Executive Director of UCA, founding President of UCA Illinois Chapter, and Convention Director. She is a Robert Woods Johnson Foundation (RWJF) Clinical Scholar fellow, Project Director for Mental Health First Aid Training in Chinese Americans (MHFA – CA) funded by Service Administration of Mental Health and Substance Abuse(SAMHSA), US Department of Health and Human Services. She currently teaches at North Carolina Central University Department of Nursing, directs the UCA WAVES program, and is a PhD student in Nursing at University of North Carolina Chapel Hill. She also serves as the Vice Chair of the Senior Advisory Board for the town of Cary, and as a member of the Health and Human Service Board of Wake County, North Carolina. She is married with five wonderful adult children and a beautiful granddaughter." },
            { name: "Vicki Cheng", title: "Executive Team Member", intro: "Working as an IT professional for 20+ years in several American companies, including John Deere, United Chamber and Ty. Inc, Vicki has built a strong sense of responsibility and broad knowledge and experiences in both technical and managing areas. With love of books and writing, Vicki involves several writing projects in the spare time and has published 17 books in China (including an essay collection, 14 Children stories and biography story book etc). Her current writing project is Chinese Guided Reading Series “It’s My Book” as a chief editor and key writer. The series is sold in USA and western countries for western school kids to learn Chinese, total 13 levels and 400 books; Working with well-known American psychiatrist Mr. Zhang Daolong, she once hosted the TV show series related the mental health topics. Vicki Cheng’s commitment to the principle of “Humanity First” is evident through her significant contributions over the past two decades. As an executive community member of UCA, she will continue to put her effort into Chinese American communities." },
            { name: "Hardy Li 黎观城", title: "Board Member", intro: "Hardy Li is the Chairman of CONPAC Group, an engineering, architectural, real estate development, farming, and manufacturing conglomerate based in the US PNW. Formerly working for two of the leading international engineering firms, Hardy managed over 50 major public infrastructure projects including 16 light rail and streetcar projects throughout the States and Central America. Hardy has involved in community services for over 2 decades. He is the founding member of UCA, currently Chairman of the Board of UCA Washington. He served as 2 term presidents of the Chinese Friendship Association of Portland; is Chairman of the Portland Chinese (Golf) Open." },
            { name: "Ray Liang 梁瑞凤", title: "Executive Director", intro: "Dr. Ray Liang (梁瑞凤) is the managing director of an NSF-sponsored composites research center at West Virginia University. A graduate of Tsinghua University, he received his PhD degree from the Chinese Academy of Sciences Institute of Chemistry and worked there as a professor prior to moving to the United States. Dr. Liang attended the Inaugural UCA Convention 2016, co-organized the 2nd Convention 2018 and attended the 3rd Convention 2022. He was one of the key founding board members of UCA, who established UCA Finance and served as treasurer since its incorporation and till Dec 2021." },
            { name: "Laura Liu", title: "Executive Team Member", intro: "Laura Liu is a community volunteer and advocate for education equity and AAPI representation. Her work at UCA focuses on education, youth programs and mental health. She currently leads communications and outreach for UCA WAVES, our AAPI Youth Mental Health Collaborative. In her local community, she serves as Board President of the Scarsdale Public Library in NY State, and also serves on several school committees to promote multiculturalism, diversity and inclusion. Laura was formerly President of Parents and Children Education Club (PCE Club), an organization serving thousands of Chinese American families on holistic education, positive identity development and mental health. She holds a Bachelor’s degree from Peking University and an MBA from Cornell University. She lives in Westchester County, NY with her husband and three teenage sons." },
            { name: "Shirley Ma 马晓红", title: "Executive team member, Chair of members and Donors committee", intro: "Shirley Ma 马晓红 born in Shenyang Liaoning, China. She moved to the USA in 1995. She has demonstrated herself as a dedicated community volunteer and leader. Shirley joined the UCA national board in 2017 and has been an active and dedicated founding member of this organization. She has been serving as the Secretary of the Board and leading the committee of UCA Donors and Members Services. She has been the key member supporting UCA national operations and programs, UCA conventions and local outreaching activities, UCA donor database management and donor following up services. She now is a senior scientist working in the area of drug development for cancer immune-therapy in the SF Bay Area after her Master’s degree study in SFSU in 2000. Shirley received her medical education in China Medical University in 1991. Shirley Ma is an at large UCA board member and also serves as the Chair of Members and Donors Services Committee at the Executive Team." },
            { name: "Steven Pei 白先慎", title: "Board Member, Chair of Governance Committee", intro: "Steven Pei is an Electrical Engineering Professor, the Executive Director of the Southwest Public Safety Technology Center founded by the Congress and a member of the faculty senate at the University of Houston. He was born in Guilin and grew up in Taiwan. Prior to joining academia, he was a department head at AT&T Bell Laboratories, Murray Hill, NJ. In Houston, he co-founded the first Asian American PAC in Texas in 2000 and served as its president. He was also a member of the founding boards of several APA and environmental organizations including the founding chair of United Chinese Americans." },
            { name: "Hong Qi 齐虹", title: "Staff member, Operations Director", intro: "Hong Qi 齐虹 was an assistant professor at Beijing Language University. In 1988 she came to the US to continue her education. In 1992 Hong Qi started working for the Washington State government, managing the statewide language testing and certification program. In 2006 Hong moved to the Seattle area and started working for King County Elections as a program coordinator. For many years, Hong has served as a leader of many nonprofit organizations in Washington State, including the president of Seattle-Chongqing Sister City Association. Currently, Hong is the program director of UCA, focusing on developing and managing UCA youth programs and training programs, and the secretary of United Chinese Americans of Washington. Hong Qi is a staff member at UCA Executive Team, she serves as the Operations Director of UCA." },
            { name: "Yinong Shen 沈一农", title: "UCA Treasure, Chair of Finance Committee, Vice Chair of Governance Committee", intro: "Yinong Shen 沈一农 is a technical expert in a US automobile manufacturer. Yinong has acted in various capacities in community organizations. Yinong Shen served as a board member of a local Chinese school for a long time, and many years as its chairman. The school was served by many volunteers that ran a clean and efficient operation that served the community well. He was elected to the board of the Chinese Association of Greater Detroit where He worked in various special events, by-laws, non-profit filing, business development, etc. He has served as a UCA board member, in the election subcommittee, governance committee, bylaw working group, etc. Yinong Shen is an at large UCA board member, UCA Treasurer& Chair of Finance Committee and Vice Chair of UCA Governance Committee." },
            { name: "Jan (Jian) Xie 解健", title: "Secretary of Board, Executive team member", intro: "Jan (Jian) Xie (解健) is an educator, photographer, and community leader dedicated to promoting Asian culture, education, and unity. She is the Founder and President of the Asian Culture and Education Society USA (ACAESUSA) and Treasurer of the Asian American Unity Coalition (AAUC). Jan serves on multiple nonprofit boards, including SafeHorns, the Gendercide Awareness Project, Destination Imagination Dallas Region, and the ACP Foundation. Her leadership and volunteer work focus on empowering youth, fostering cultural understanding, and supporting diverse communities across the U.S. Jan Xie is an At-Large Board Member, Secretary, and Executive Team Member of United Chinese Americans (UCA)." },
            { name: "Gary Yu 俞国梁", title: "Executive team member, Chair of Communication Committee", intro: "President of the Massachusetts Chapter of the United Chinese American(UCA)<br>Chair of New England Chinese American Alliance (NECAA)<br>President of the Boston Chapter of the Asian Pacific Islander American Public Affairs Association (APAPA)<br>Founder and CEO of Boston International Media Consulting and Boston Asian Radio & TV." }
        ];

        const initialExecCount = 3;
        let isExecExpanded = false;

        function renderExecutiveCards(count) {
            executiveGrid.innerHTML = '';
            const membersToShow = executiveMembers.slice(0, count);

            membersToShow.forEach((member, index) => {
                const card = document.createElement('div');
                card.className = 'board-card';

                // Image URL logic: excutive1.png, excutive2.png, etc.
                const imgUrl = `https://storage.googleapis.com/objects.ucausa.org/excutive/excutive${index + 1}.png`;

                card.innerHTML = `
                    <img src="${imgUrl}" alt="${member.name}" loading="lazy">
                    <div class="card-info">
                        <h3>${member.name}</h3>
                        <h4>${member.title}</h4>
                        <p>${member.intro}</p>
                    </div>
                `;
                executiveGrid.appendChild(card);
            });
        }

        // Initial render
        renderExecutiveCards(initialExecCount);

        toggleExecutiveBtn.addEventListener('click', () => {
            if (isExecExpanded) {
                // Show Less
                renderExecutiveCards(initialExecCount);
                toggleExecutiveBtn.textContent = 'Show More';
                const section = document.querySelector('.executive-section');
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // Show More
                renderExecutiveCards(executiveMembers.length);
                toggleExecutiveBtn.textContent = 'Show Less';
            }
            isExecExpanded = !isExecExpanded;
        });
    }
});