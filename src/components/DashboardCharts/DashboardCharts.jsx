import React from 'react';
import {ReactComponent as ChartIcon} from "../../assets/contentReachIcon.svg";
import {ReactComponent as PinkCircle} from "../../assets/circle-pink.svg";
import {ReactComponent as BlueCircle} from "../../assets/circle-blue.svg";
import {ReactComponent as YourGoodIcon} from "../../assets/doingGoodIcon.svg";
import {ReactComponent as CircleDiagram} from "../../assets/circleDiagramm.svg";
import {ReactComponent as SmallBlueCircle} from "../../assets/smallCircleBl.svg";
import {ReactComponent as SmallBlueCircle2} from "../../assets/smallCircleBl2.svg";
import {ReactComponent as SmallBlueCircle3} from "../../assets/smallCircleBl3.svg";
import {ReactComponent as SmallPinkCircle} from "../../assets/pinkSmallCircle.svg";
import {ReactComponent as SmallGreenCircle} from "../../assets/greenSmallCircle.svg";
import {ReactComponent as SmallPurpleCircle} from "../../assets/purpleSmallCircle.svg";
import {ReactComponent as LineDiagramm} from "../../assets/lineDiagramm.svg";
import {ReactComponent as SmallArrowRight} from "../../assets/arrowRightSmall.svg";
import {ReactComponent as DeskIcon} from "../../assets/DeskIcon.svg";
import {ReactComponent as AudienceUserAvatar} from "../../assets/Ellipse 105.svg";
import {ReactComponent as LikeIcon} from "../../assets/bx_bxs-like.svg";
import {ReactComponent as CommentIcon} from "../../assets/bx_bxs-comment-dots.svg";
import {ReactComponent as ShareIcon} from "../../assets/bx_bxs-share.svg";
import {ReactComponent as MegaphoneIcon} from "../../assets/ph_megaphone-bold.svg";
import {ReactComponent as MainChart} from "../../assets/mainChart.svg";
import styles from './DashboardCharts.module.scss'

const DashboardCharts = () => {
  return (
    <div className={styles.dashboardChartsContainer}>
     <div className={styles.contentReachSummaryContainer}>
       <div className={styles.contentReachSummaryHead}>
         <div className={styles.contentReachSummaryHeadLogoTitle}>
           <ChartIcon/>
           <h2 className={styles.contentReachSummaryTitle}>Content Reach Summary</h2>
         </div>

         <div className={styles.contentReachSummaryHeadTabs}>
           <span className={styles.contentReachSummaryHeadTab}>Daily</span>
           <span className={styles.contentReachSummaryHeadTab}>Weekly</span>
           <span className={styles.contentReachSummaryHeadTab}>Monthly</span>
         </div>
       </div>
       <div className={styles.contentReachSummaryMainSectionContainer}>
         <div className={styles.contentReachSummaryMainSectionChart}>
           <div className={styles.contentReachSummaryMainChartContainer}>
             <MainChart/>
           </div>

         </div>
         <div className={styles.contentReachSummaryMainSectionSecondaryChart}>
           <div className={styles.contentReachSummaryMainSectionSecondaryChartMainInformation}>
             <div className={styles.contentReachSummaryMainSectionSecondaryChartMainInformationItem}>
               <p  className={styles.contentReachSummaryMainSectionSecondaryChartMainInformationItemNumber}>150K</p>
               <span className={styles.contentReachSummaryMainSectionSecondaryChartMainInformationItemText}>Total Reach</span>
             </div>
             <div  className={styles.contentReachSummaryMainSectionSecondaryChartMainInformationItem}>
               <p className={styles.contentReachSummaryMainSectionSecondaryChartMainInformationItemNumber}>115K</p>
               <span className={styles.contentReachSummaryMainSectionSecondaryChartMainInformationItemText}> <BlueCircle/> Paid Reach</span>
             </div>
             <div className={styles.contentReachSummaryMainSectionSecondaryChartMainInformationItem}>
               <p className={styles.contentReachSummaryMainSectionSecondaryChartMainInformationItemNumber}>35K</p>
               <span className={styles.contentReachSummaryMainSectionSecondaryChartMainInformationItemText}><PinkCircle/> Organic Reach</span>
             </div>

           </div>
           <YourGoodIcon className={styles.contentReachSummaryMainSectionGoodAchivment}/>

         </div>

       </div>


     </div>

      <div className={styles.contentAudienceDemographicContainer}>
        <div className={styles.contentDemographicHeadLogoTitle}>
          <ChartIcon/>
          <h2 className={styles.contentDemographicTitle}>Audience Demographic</h2>

      </div>
        <div className={styles.demographicSubInformationContainer} >
          <div className={styles.demographicSubHeadContainer}>
            <div className={styles.demographicSubHeadData}>
              <span className={styles.demographicSubTitle}>Order Time</span>
              <span className={styles.demographicSubTitleData}>From 1-6 Dec 2021</span>
            </div>
            <div className={styles.demographicSubTitlReportBtn}>View Report</div>
          </div>


          <div className={styles.demographicDiagramContainer}>
            <CircleDiagram className={styles.demographicDiagram}/>
          </div>
          <div className={styles.demographicDiagramAgenda}>
            <span className={styles.demographicDiagramAgendaItem}>
              <SmallBlueCircle className={styles.demographicDiagramAgendaItemColor}/>Male (68%)</span>
            <span  className={styles.demographicDiagramAgendaItem}> <SmallBlueCircle2 className={styles.demographicDiagramAgendaItemColor}/> Female (38%)</span>
            <span  className={styles.demographicDiagramAgendaItem}> <SmallBlueCircle3 className={styles.demographicDiagramAgendaItemColor}/> Other (12%)</span>
          </div>






        </div>
        <div className={styles.demographicAudienceInfoContainer}>
          <h3>Audience Age</h3>
          <LineDiagramm className={styles.demographicAudienceInfoDiagramm}/>

          <div className={styles.demographicAudienceInfoItemMainContainer}>
            <div className={styles.demographicAudienceInfoItemContainer}>
              <div >
                <SmallPinkCircle/>
                <span className={styles.demographicAudienceInfoYears}> &lt; 15 years old</span>
              </div>

              <span className={styles.demographicAudienceInfoAmount}>21K</span>
              <span className={styles.demographicAudienceInfoProcentage}>27%</span>
            </div>
            <div className={styles.demographicAudienceInfoItemContainer}>
              <div>
                <SmallBlueCircle/>
                <span className={styles.demographicAudienceInfoYears}>20 - 35 years old</span>
              </div>

              <span className={styles.demographicAudienceInfoAmount}>21K</span>
              <span className={styles.demographicAudienceInfoProcentage}>40%</span>
            </div>
            <div className={styles.demographicAudienceInfoItemContainer}>
              <div>
                <SmallGreenCircle/>
                <span className={styles.demographicAudienceInfoYears}>40 - 50 years old</span>
              </div>

              <span className={styles.demographicAudienceInfoAmount}>21K</span>
              <span className={styles.demographicAudienceInfoProcentage}>16%</span>
            </div>
            <div className={styles.demographicAudienceInfoItemContainer}>
              <div>
                <SmallPurpleCircle/>
                <span className={styles.demographicAudienceInfoYears}> &gt; 15 years old</span>
              </div>
              <span className={styles.demographicAudienceInfoAmount}>21K</span>
              <span className={styles.demographicAudienceInfoProcentage}>8%</span>
            </div>
          </div>

        </div>


      </div>

      <div className={styles.contentScheduleContainer}>
        <div className={styles.contentScheduleHeadLogoTitle}>
          <div className={styles.contentScheduleHeadSecondaryContainer}>
            <ChartIcon/>
            <h2 className={styles.contentDemographicTitle}>Schedule Content</h2>
          </div>
          <span className={styles.contentDemographicTitleSeeDetailBtn} >
            See Detail <SmallArrowRight className={styles.contentDemographicTitleSeeDetailBtnArrow}/>
          </span>
        </div>
        <div className={styles.contentScheduleAgendaContainer}>
          <div className={styles.contentScheduleAgendaLeftInfo}>
            <h3>Upcoming Event</h3>

            <div className={styles.contentScheduleAgendaLeftInfoContainer} >
              <div className={styles.contentScheduleAgendaLeftInfoItem}>
                <DeskIcon/>
              <span className={styles.contentScheduleAgendaLeftInfoItemTitle}>New Store Product Campaign</span>
                <span className={styles.contentScheduleAgendaLeftInfoItemAbbr}>M</span>
                <span className={styles.contentScheduleAgendaLeftDots}>...</span>
              </div>
              <div className={styles.contentScheduleAgendaLeftInfoItem}>
                <DeskIcon/>
                <span className={styles.contentScheduleAgendaLeftInfoItemTitle}>Post A Travel Poster</span>
                <span className={styles.contentScheduleAgendaLeftInfoItemAbbrP}>P</span>
                <span  className={styles.contentScheduleAgendaLeftDots}>...</span>
              </div>
              <div className={styles.contentScheduleAgendaLeftInfoItem}>
                <DeskIcon/>
                <span className={styles.contentScheduleAgendaLeftInfoItemTitle}>Mars Travel Manual for Mark...</span>
                <span className={styles.contentScheduleAgendaLeftInfoItemAbbrD}>D</span>
                <span className={styles.contentScheduleAgendaLeftDots}>...</span>
              </div>
              <div className={styles.contentScheduleAgendaLeftInfoItem}>
                <DeskIcon/>
                <span className={styles.contentScheduleAgendaLeftInfoItemTitle}>Review with Compliance</span>
                <span className={styles.contentScheduleAgendaLeftInfoItemAbbr}>M</span>
                <span className={styles.contentScheduleAgendaLeftDots}>...</span>
              </div>
              <div className={styles.contentScheduleAgendaLeftInfoItem}>
                <DeskIcon/>
                <span className={styles.contentScheduleAgendaLeftInfoItemTitle}>Public Holiday</span>
                <span className={styles.contentScheduleAgendaLeftInfoItemAbbr}>M</span>
                <span className={styles.contentScheduleAgendaLeftDots}>...</span>
              </div>
            </div>


          </div>
          <div className={styles.contentScheduleAgendaChart}>
            <div className={styles.contentScheduleAgendaChartCalendarContainer}>
              <div className={styles.contentScheduleAgendaChartCalendarItem}>
                <div className={styles.contentScheduleAgendaChartCalendarItemNumber}>6</div>
                <div  className={styles.contentScheduleAgendaChartCalendarItemDay}>Fri</div>
              </div>
              <div  className={styles.contentScheduleAgendaChartCalendarItem}>
                <div className={styles.contentScheduleAgendaChartCalendarItemNumber}>7</div>
                <div  className={styles.contentScheduleAgendaChartCalendarItemDay}>Sat</div>
              </div>
              <div  className={styles.contentScheduleAgendaChartCalendarItem}>
                <div className={styles.contentScheduleAgendaChartCalendarItemNumber}>8</div>
                <div  className={styles.contentScheduleAgendaChartCalendarItemDay}>Sun</div>
              </div>
              <div  className={styles.contentScheduleAgendaChartCalendarItem}>
                <div className={styles.contentScheduleAgendaChartCalendarItemNumber}>9</div>
                <div  className={styles.contentScheduleAgendaChartCalendarItemDay}>Mon</div>
              </div>
              <div  className={styles.contentScheduleAgendaChartCalendarItem}>
                <div className={styles.contentScheduleAgendaChartCalendarItemNumber}>10</div>
                <div  className={styles.contentScheduleAgendaChartCalendarItemDay}>Tue</div>
              </div>
              <div  className={styles.contentScheduleAgendaChartCalendarItem}>
                <div className={styles.contentScheduleAgendaChartCalendarItemNumber}>11</div>
                <div  className={styles.contentScheduleAgendaChartCalendarItemDay}>Wed</div>
              </div>
              <div  className={styles.contentScheduleAgendaChartCalendarItem}>
                <div className={styles.contentScheduleAgendaChartCalendarItemNumber}>12</div>
                <div  className={styles.contentScheduleAgendaChartCalendarItemDay}>Thu</div>
              </div>
              <div  className={styles.contentScheduleAgendaChartCalendarItem}>
                <div className={styles.contentScheduleAgendaChartCalendarItemNumber}>13</div>
                <div  className={styles.contentScheduleAgendaChartCalendarItemDay}>Fri</div>
              </div>
              <div  className={styles.contentScheduleAgendaChartCalendarItem}>
                <div className={styles.contentScheduleAgendaChartCalendarItemNumber}>14</div>
                <div  className={styles.contentScheduleAgendaChartCalendarItemDay}>Sat</div>
              </div>
              <div  className={styles.contentScheduleAgendaChartCalendarItem}>
                <div className={styles.contentScheduleAgendaChartCalendarItemNumber}>15</div>
                <div  className={styles.contentScheduleAgendaChartCalendarItemDay}>Sun</div>
              </div>
              <div  className={styles.contentScheduleAgendaChartCalendarItem}>
                <div className={styles.contentScheduleAgendaChartCalendarItemNumber}>16</div>
                <div  className={styles.contentScheduleAgendaChartCalendarItemDay}>Mon</div>
              </div>

            </div>
            <div className={styles.contentScheduleAgendaChartLine}>
              <div className={styles.contentScheduleAgendaChartBlueEvent}>
                <div className={styles.contentScheduleAgendaChartBlueEventSubContainer}>
                  <MegaphoneIcon/>
                  <div className={styles.contentScheduleAgendaChartBlueEventText}>
                    <span  className={styles.contentScheduleAgendaChartBlueEventTextName}>New Store Product Campaign</span>
                    <span  className={styles.contentScheduleAgendaChartBlueEventTextCategory}>Marketing</span>
                  </div>
                </div>


                <AudienceUserAvatar className={styles.mostEngangeUserTopicAvatar}/>

              </div>
            </div>
            <div className={styles.contentScheduleAgendaChartLine}>
              <div className={styles.contentScheduleAgendaChartBlueEvent}>
                <div className={styles.contentScheduleAgendaChartBlueEventSubContainer}>
                  <MegaphoneIcon/>
                  <div className={styles.contentScheduleAgendaChartBlueEventText}>
                    <span  className={styles.contentScheduleAgendaChartBlueEventTextName}>New Store Product Campaign</span>
                    <span  className={styles.contentScheduleAgendaChartBlueEventTextCategory}>Marketing</span>
                  </div>
                </div>


                <AudienceUserAvatar className={styles.mostEngangeUserTopicAvatar}/>

              </div>
            </div>
            <div className={styles.contentScheduleAgendaChartLine}>
              <div className={styles.contentScheduleAgendaChartBlueEvent}>
                <div className={styles.contentScheduleAgendaChartBlueEventSubContainer}>
                  <MegaphoneIcon/>
                  <div className={styles.contentScheduleAgendaChartBlueEventText}>
                    <span  className={styles.contentScheduleAgendaChartBlueEventTextName}>New Store Product Campaign</span>
                    <span  className={styles.contentScheduleAgendaChartBlueEventTextCategory}>Marketing</span>
                  </div>
                </div>


                <AudienceUserAvatar className={styles.mostEngangeUserTopicAvatar}/>

              </div>
            </div>
            <div className={styles.contentScheduleAgendaChartLine}>
            </div>

            {/*<ScheduleChart className={styles.contentScheduleAgendaChartImg} />*/}
          </div>

        </div>

      </div>

      <div className={styles.mostEnganggeAudienceContainer}>
       {/*<AudienceTopic className={styles.mostEnganggeAudienceImg}/>*/}
        <div className={styles.contentDemographicHeadLogoTitle}>
          <ChartIcon/>
          <h2 className={styles.contentDemographicTitle}>Most Engangge Audience</h2>
        </div>
        <div className={styles.mostEngaggeUserTopicsContainer}>
          <div className={styles.mostEngangeUserTopic}>
             <AudienceUserAvatar className={styles.mostEngangeUserTopicAvatar}/>
            <div className={styles.mostEngangeUserTopicInfoContainer}>
              <p className={styles.mostEngangeUserTopicInfoUserName}>Margareth Zend</p>
              <div className={styles.mostEngangeUserTopicInfoSocialContainer}>
                <div className={styles.mostEngangeUserTopicInfoSocialInfo}> <LikeIcon className={styles.mostEngangeUserTopicIcon}/> 300 likes</div>
                <div className={styles.mostEngangeUserTopicInfoSocialInfo}> <CommentIcon className={styles.mostEngangeUserTopicIcon}/> 120 comments</div>
                <div className={styles.mostEngangeUserTopicInfoSocialInfo}> <ShareIcon className={styles.mostEngangeUserTopicIcon}/> 86 shares</div>
              </div>
            </div>
          </div>
          <div className={styles.mostEngangeUserTopic}>
            <AudienceUserAvatar className={styles.mostEngangeUserTopicAvatar}/>
            <div className={styles.mostEngangeUserTopicInfoContainer}>
              <p className={styles.mostEngangeUserTopicInfoUserName}>Margareth Zend</p>
              <div className={styles.mostEngangeUserTopicInfoSocialContainer}>
                <div className={styles.mostEngangeUserTopicInfoSocialInfo}> <LikeIcon className={styles.mostEngangeUserTopicIcon}/> 300 likes</div>
                <div className={styles.mostEngangeUserTopicInfoSocialInfo}> <CommentIcon className={styles.mostEngangeUserTopicIcon}/> 120 comments</div>
                <div className={styles.mostEngangeUserTopicInfoSocialInfo}> <ShareIcon className={styles.mostEngangeUserTopicIcon}/> 86 shares</div>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
};


export default DashboardCharts;
