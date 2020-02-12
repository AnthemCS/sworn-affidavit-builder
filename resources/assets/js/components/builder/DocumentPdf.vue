<template>
  <div
    class="position-sticky"
    style="position:absolute;left:50%;margin-left:-297px;top:0px;width:595px;height:841px;border-style:outset;overflow:hidden"
  >
    <div style="position:absolute;left:0px;top:0px">
      <img src="./../../images/background1.jpg" width="595" height="841" />
    </div>

    <div style="position:absolute;left:234.92px;top:37.31px" class="cls_002">
      <span class="cls_002">SWORN AFFIDAVIT</span>
    </div>
    <div style="position:absolute;left:207.72px;top:54.92px" class="cls_003">
      <span class="cls_003">B-BBEE Exempted Micro Enterprise</span>
    </div>
    <div style="position:absolute;left:272.38px;top:72.98px" class="cls_004">
      <span class="cls_004">GENERAL</span>
    </div>
    <div style="position:absolute;left:71.12px;top:78.91px" class="cls_018">
      <span class="cls_018">LOGO</span>
    </div>
    <div style="position:absolute;left:487.50px;top:107.05px" class="cls_005">
      <span class="cls_005">DATE OF ISSUE</span>
    </div>
    <div style="position:absolute;left:427.67px;top:116.94px" class="cls_006">
      <span class="cls_006">1</span>
    </div>
    <div style="position:absolute;left:458.58px;top:117.88px" class="cls_007">
      <span class="cls_007">{{ formData.issueDate }}</span>
    </div>
    <div style="position:absolute;left:49.52px;top:127.08px" class="cls_008">
      <span class="cls_008">MEASURED ENTERPRISE/BUSINESS ENTITY</span>
    </div>
    <div style="position:absolute;left:50.02px;top:153.75px" class="cls_009">
      <span class="cls_009">Enterprise Name (</span
      ><span class="cls_010">Full Name</span><span class="cls_009">):</span>
    </div>
    <div style="position:absolute;left:193.03px;top:153.75px" class="cls_007">
      <span class="cls_007">{{ formData.enterpriseName }}</span>
    </div>
    <div style="position:absolute;left:562.60px;top:152.31px" class="cls_006">
      <span class="cls_006">2</span>
    </div>
    <div style="position:absolute;left:50.02px;top:166.75px" class="cls_009">
      <span class="cls_009">Trade Name (</span
      ><span class="cls_010">If Applicable</span><span class="cls_009">):</span>
    </div>
    <div style="position:absolute;left:193.03px;top:166.75px" class="cls_007">
      <span class="cls_007">{{ formData.tradeName }}</span>
    </div>
    <div style="position:absolute;left:562.60px;top:165.54px" class="cls_006">
      <span class="cls_006">3</span>
    </div>
    <div style="position:absolute;left:50.02px;top:179.75px" class="cls_009">
      <span class="cls_009">Registration Number:</span>
    </div>
    <div style="position:absolute;left:193.03px;top:179.75px" class="cls_007">
      <span class="cls_007">{{ formData.registrationNumber }}</span>
    </div>
    <div style="position:absolute;left:562.60px;top:178.41px" class="cls_006">
      <span class="cls_006">4</span>
    </div>
    <div style="position:absolute;left:50.02px;top:192.75px" class="cls_009">
      <span class="cls_009">Type of Entity (</span
      ><span class="cls_010">CC, PTY Ltd, etc</span
      ><span class="cls_009">):</span>
    </div>
    <div style="position:absolute;left:193.03px;top:192.75px" class="cls_007">
      <span class="cls_007">{{ formData.entityType }}</span>
    </div>
    <div style="position:absolute;left:562.60px;top:191.28px" class="cls_006">
      <span class="cls_006">5</span>
    </div>
    <div style="position:absolute;left:50.02px;top:205.75px" class="cls_009">
      <span class="cls_009">Physical Address:</span>
    </div>
    <div style="position:absolute;left:193.03px;top:205.75px" class="cls_007">
      <span class="cls_007">{{ formData.physicalAddress }}</span>
    </div>
    <div style="position:absolute;left:562.60px;top:204.15px" class="cls_006">
      <span class="cls_006">6</span>
    </div>
    <div style="position:absolute;left:41.42px;top:236.67px" class="cls_009">
      <span class="cls_009">I hereby declare under Oath that:</span>
    </div>
    <div style="position:absolute;left:374.26px;top:256.89px" class="cls_015">
      <span class="cls_015">Black Designated Group Owned %</span>
    </div>
    <div style="position:absolute;left:19.67px;top:259.97px" class="cls_006">
      <span class="cls_006">7</span>
    </div>
    <div style="position:absolute;left:41.42px;top:262.87px" class="cls_009">
      <span class="cls_009">The Enterprise is</span
      ><span class="cls_011"> </span
      ><span class="cls_012">
        {{ formData.percentageBlackOwnedEnterprise }} %</span
      ><span class="cls_011"> </span
      ><span class="cls_009"
        >Black Owned as per Amended Code Series 100 of</span
      >
    </div>
    <div style="position:absolute;left:374.26px;top:269.89px" class="cls_015">
      <span class="cls_015">Breakdown as per the de nition stated</span>
    </div>
    <div style="position:absolute;left:41.42px;top:275.87px" class="cls_009">
      <span class="cls_009"
        >the Amended Codes of Good Practice issued under section 9 (1) of
        B-BBEE</span
      >
    </div>
    <div style="position:absolute;left:41.42px;top:287.87px" class="cls_009">
      <span class="cls_009"
        >Act No 53 of 2003 as Amended by Act No 46 of 2013;</span
      >
    </div>
    <div style="position:absolute;left:374.26px;top:297.20px" class="cls_009">
      <span class="cls_009">Black Youth %</span>
    </div>
    <div style="position:absolute;left:500.50px;top:297.20px" class="cls_014">
      <span class="cls_014"> {{ formData.percentageBlackYouth }}</span>
    </div>
    <div style="position:absolute;left:563.03px;top:296.28px" class="cls_006">
      <span class="cls_006">10</span>
    </div>
    <div style="position:absolute;left:19.67px;top:311.78px" class="cls_006">
      <span class="cls_006">8</span>
    </div>
    <div style="position:absolute;left:41.42px;top:314.07px" class="cls_009">
      <span class="cls_009">The Enterprise is</span
      ><span class="cls_011"> </span
      ><span class="cls_012">
        {{ formData.percentageBlackFemaleOwnedEnterprise }} %</span
      ><span class="cls_011"> </span
      ><span class="cls_009">Black Female Owned as per Amended Code</span>
    </div>
    <div style="position:absolute;left:374.26px;top:319.20px" class="cls_009">
      <span class="cls_009">Black Disabled %</span>
    </div>
    <div style="position:absolute;left:500.50px;top:319.20px" class="cls_014">
      <span class="cls_014">{{ formData.percentageBlackDisabled }}</span>
    </div>
    <div style="position:absolute;left:563.03px;top:318.31px" class="cls_006">
      <span class="cls_006">11</span>
    </div>
    <div style="position:absolute;left:41.42px;top:327.07px" class="cls_009">
      <span class="cls_009"
        >Series 100 of the Amended Codes of Good Practice issued under section
        9</span
      >
    </div>
    <div style="position:absolute;left:41.42px;top:339.07px" class="cls_009">
      <span class="cls_009"
        >(1) of B-BBEE Act No 53 of 2003 as Amended by Act No 46 of 2013;</span
      >
    </div>
    <div style="position:absolute;left:374.26px;top:341.20px" class="cls_009">
      <span class="cls_009">Black Unemployed %</span>
    </div>
    <div style="position:absolute;left:500.50px;top:341.20px" class="cls_014">
      <span class="cls_014">{{ formData.percentageBlackUnemployed }} </span>
    </div>
    <div style="position:absolute;left:563.03px;top:338.52px" class="cls_006">
      <span class="cls_006">12</span>
    </div>
    <div style="position:absolute;left:374.26px;top:363.20px" class="cls_009">
      <span class="cls_009">Black People living in</span>
    </div>
    <div style="position:absolute;left:500.50px;top:363.20px" class="cls_014">
      <span class="cls_014">{{ formData.percentageBlackRuralAreas }}</span>
    </div>
    <div style="position:absolute;left:563.03px;top:362.36px" class="cls_006">
      <span class="cls_006">13</span>
    </div>
    <div style="position:absolute;left:19.67px;top:363.58px" class="cls_006">
      <span class="cls_006">9</span>
    </div>
    <div style="position:absolute;left:41.42px;top:365.27px" class="cls_009">
      <span class="cls_009">The Enterprise is</span
      ><span class="cls_011"> </span
      ><span class="cls_012">
        {{ formData.percentageBlackDesignatedGroupEnterprise }} %</span
      ><span class="cls_011"> </span
      ><span class="cls_009">Black Designated Group Owned as per Amended</span>
    </div>
    <div style="position:absolute;left:374.26px;top:375.20px" class="cls_009">
      <span class="cls_009">Rural areas %</span>
    </div>
    <div style="position:absolute;left:41.42px;top:378.27px" class="cls_009">
      <span class="cls_009"
        >Code Series 100 of the Amended Codes of Good Practice issued
        under</span
      >
    </div>
    <div style="position:absolute;left:41.42px;top:390.27px" class="cls_009">
      <span class="cls_009"
        >section 9 (1) of B-BBEE Act No 53 of 2003 as Amended by Act No 46
        of</span
      >
    </div>
    <div style="position:absolute;left:374.26px;top:397.20px" class="cls_009">
      <span class="cls_009">Black Military Veterans %</span>
    </div>
    <div style="position:absolute;left:500.50px;top:397.20px" class="cls_014">
      <span class="cls_014">
        {{ formData.percentageBlackMilitaryVeterans }}
      </span>
    </div>
    <div style="position:absolute;left:563.03px;top:394.63px" class="cls_006">
      <span class="cls_006">14</span>
    </div>
    <div style="position:absolute;left:41.42px;top:402.27px" class="cls_009">
      <span class="cls_009">2013;</span>
    </div>
    <div style="position:absolute;left:41.42px;top:426.41px" class="cls_009">
      <span class="cls_009"
        >Based on the Financial Statements/Management Accounts and other
        information available on the latest nancial year-end</span
      >
    </div>
    <div style="position:absolute;left:16.34px;top:437.88px" class="cls_006">
      <span class="cls_006">15</span>
    </div>
    <div style="position:absolute;left:41.42px;top:438.61px" class="cls_009">
      <span class="cls_009">of</span><span class="cls_011"> </span
      ><span class="cls_012"> R {{ formData.financialYearEndAmount }} </span
      ><span class="cls_011"> , </span
      ><span class="cls_009">the annual Total Revenue was R 10 000 000.00 </span
      ><span class="cls_010">(Ten Million Rand)</span
      ><span class="cls_009"> or less;</span>
    </div>
    <div style="position:absolute;left:49.52px;top:468.00px" class="cls_009">
      <span class="cls_009">100% Black Owned</span>
    </div>
    <div style="position:absolute;left:193.03px;top:468.00px" class="cls_013">
      <span class="cls_013">Level One</span><span class="cls_009"> </span
      ><span class="cls_010">(135% B-BBEE procurement recognition level)</span>
    </div>
    <div style="position:absolute;left:563.03px;top:465.96px" class="cls_006">
      <span class="cls_006">16</span>
    </div>
    <div style="position:absolute;left:50.02px;top:489.42px" class="cls_009">
      <span class="cls_009">At least 51% Black Owned</span>
    </div>
    <div style="position:absolute;left:193.03px;top:489.42px" class="cls_013">
      <span class="cls_013">Level Two</span><span class="cls_009"> </span
      ><span class="cls_010">(125% B-BBEE procurement recognition level)</span>
    </div>
    <div style="position:absolute;left:563.03px;top:488.19px" class="cls_006">
      <span class="cls_006">16</span>
    </div>
    <div style="position:absolute;left:50.02px;top:510.84px" class="cls_009">
      <span class="cls_009">Less than 51% Black Owned</span>
    </div>
    <div style="position:absolute;left:193.03px;top:510.84px" class="cls_013">
      <span class="cls_013">Level Four</span><span class="cls_009"> </span
      ><span class="cls_010">(100% B-BBEE procurement recognition level)</span>
    </div>
    <div style="position:absolute;left:563.03px;top:510.42px" class="cls_006">
      <span class="cls_006">16</span>
    </div>
    <div style="position:absolute;left:41.43px;top:538.42px" class="cls_009">
      <span class="cls_009"
        >I know and understand the contents of this a davit and I have no
        objection to take the prescribed oath and consider the</span
      >
    </div>
    <div style="position:absolute;left:41.43px;top:550.42px" class="cls_009">
      <span class="cls_009"
        >oath binding on my conscience and on the Owners of the Enterprise which
        I represent in this matter.</span
      >
    </div>
    <div style="position:absolute;left:257.13px;top:561.54px" class="cls_006">
      <span class="cls_006">18</span>
    </div>
    <div style="position:absolute;left:41.43px;top:571.03px" class="cls_009">
      <span class="cls_009">I, the undersigned,</span>
    </div>
    <div style="position:absolute;left:16.34px;top:579.40px" class="cls_006">
      <span class="cls_006">17</span>
    </div>
    <div style="position:absolute;left:41.43px;top:584.03px" class="cls_014">
      <span class="cls_014">Name and Surname</span><span class="cls_011"> </span
      ><span class="cls_009">with identity number</span
      ><span class="cls_011"> </span
      ><span class="cls_014">800000 0000 000, </span
      ><span class="cls_009">hereby declare under oath as follows:</span>
    </div>
    <div style="position:absolute;left:41.43px;top:610.03px" class="cls_009">
      <span class="cls_009"
        >1. The contents of this statement are to the best of my knowledge a
        true re ection of the facts.</span
      >
    </div>
    <div style="position:absolute;left:41.43px;top:623.03px" class="cls_009">
      <span class="cls_009"
        >2. I am a Member / Director / Owner of the following enterprise and am
        duly authorised to act on its behalf:</span
      >
    </div>
    <div style="position:absolute;left:42.52px;top:671.39px" class="cls_009">
      <span class="cls_009">Deponent Signature:</span>
    </div>
    <div style="position:absolute;left:42.52px;top:694.39px" class="cls_009">
      <span class="cls_009">Date:</span>
    </div>
    <div style="position:absolute;left:43.52px;top:733.13px" class="cls_016">
      <span class="cls_016">DEFINITION OF “BLACK PEOPLE”</span>
    </div>
    <div style="position:absolute;left:43.52px;top:739.13px" class="cls_017">
      <span class="cls_017"
        >As per the Broad-Based Black Economic Empowerment Act 53 of 2003 as
        Amended by Act No 46 of 2013 “Black People” is a generic term which
        means Africans, Coloureds and Indians - (a) Who are citizens of the
        Republic of South Africa by birth or</span
      >
    </div>
    <div style="position:absolute;left:43.52px;top:745.13px" class="cls_017">
      <span class="cls_017"
        >descent; or (b) Who became citizens of the Republic of South Africa by
        naturalization (i). Before 27 April 1994; or (ii). On or after 27 April
        1994 and who would have been entitled to acquire citizenship by
        naturalization prior to that date</span
      >
    </div>
    <div style="position:absolute;left:43.52px;top:755.51px" class="cls_016">
      <span class="cls_016">DEFINITION OF “BLACK DESIGNATED GROUPS”</span>
    </div>
    <div style="position:absolute;left:43.52px;top:761.51px" class="cls_017">
      <span class="cls_017"
        >(a) unemployed black people not attending and not required by law to
        attend an educational institution and not awaiting admission to an
        educational institution;</span
      >
    </div>
    <div style="position:absolute;left:43.52px;top:767.51px" class="cls_017">
      <span class="cls_017"
        >(b) Black people who are youth as de ned in the National Youth
        Commission Act of 1996;</span
      >
    </div>
    <div style="position:absolute;left:43.52px;top:773.51px" class="cls_017">
      <span class="cls_017"
        >(c) Black people who are persons with disabilities as de ned in the
        Code of Good Practice on employment of people with disabilities issued
        under the Employment Equity Act;</span
      >
    </div>
    <div style="position:absolute;left:43.52px;top:779.51px" class="cls_017">
      <span class="cls_017"
        >(d) Black people living in rural and under developed areas;</span
      >
    </div>
    <div style="position:absolute;left:43.52px;top:785.51px" class="cls_017">
      <span class="cls_017"
        >(e) Black military veterans who quali es to be called a military
        veteran in terms of the Military Veterans Act 18 of 2011;”</span
      >
    </div>
    <div style="position:absolute;left:43.52px;top:798.19px" class="cls_019">
      <span class="cls_019"
        >Valid for 12 Months from the date signed by the commissioner</span
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "DocumentPdf",
  props: {
    formData: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="css">
span.cls_002 {
  font-family: Arial, serif;
  font-size: 15.1px;
  color: rgb(229, 12, 128);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
div.cls_002 {
  font-family: Arial, serif;
  font-size: 15.1px;
  color: rgb(229, 12, 128);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
span.cls_003 {
  font-family: Arial, serif;
  font-size: 12.6px;
  color: rgb(229, 12, 128);
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
}
div.cls_003 {
  font-family: Arial, serif;
  font-size: 12.6px;
  color: rgb(229, 12, 128);
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
}
span.cls_004 {
  font-family: Arial, serif;
  font-size: 12.1px;
  color: rgb(229, 12, 128);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
div.cls_004 {
  font-family: Arial, serif;
  font-size: 12.1px;
  color: rgb(229, 12, 128);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
span.cls_018 {
  font-family: Arial, serif;
  font-size: 12.1px;
  color: rgb(199, 199, 198);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
div.cls_018 {
  font-family: Arial, serif;
  font-size: 12.1px;
  color: rgb(199, 199, 198);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
span.cls_005 {
  font-family: Arial, serif;
  font-size: 9.1px;
  color: rgb(229, 12, 128);
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
}
div.cls_005 {
  font-family: Arial, serif;
  font-size: 9.1px;
  color: rgb(229, 12, 128);
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
}
span.cls_006 {
  font-family: Arial, serif;
  font-size: 12.1px;
  color: rgb(43, 42, 41);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
div.cls_006 {
  font-family: Arial, serif;
  font-size: 12.1px;
  color: rgb(43, 42, 41);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
span.cls_007 {
  font-family: Arial, serif;
  font-size: 10.1px;
  color: rgb(43, 42, 41);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
div.cls_007 {
  font-family: Arial, serif;
  font-size: 10.1px;
  color: rgb(43, 42, 41);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
span.cls_008 {
  font-family: Arial, serif;
  font-size: 11.1px;
  color: rgb(229, 12, 128);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
div.cls_008 {
  font-family: Arial, serif;
  font-size: 11.1px;
  color: rgb(229, 12, 128);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
span.cls_009 {
  font-family: Arial, serif;
  font-size: 10.1px;
  color: rgb(229, 12, 128);
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
}
div.cls_009 {
  font-family: Arial, serif;
  font-size: 10.1px;
  color: rgb(229, 12, 128);
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
}
span.cls_010 {
  font-family: Arial, serif;
  font-size: 10.1px;
  color: rgb(229, 12, 128);
  font-weight: normal;
  font-style: italic;
  text-decoration: none;
}
div.cls_010 {
  font-family: Arial, serif;
  font-size: 10.1px;
  color: rgb(229, 12, 128);
  font-weight: normal;
  font-style: italic;
  text-decoration: none;
}
span.cls_015 {
  font-family: Arial, serif;
  font-size: 10.1px;
  color: rgb(229, 12, 128);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
div.cls_015 {
  font-family: Arial, serif;
  font-size: 10.1px;
  color: rgb(229, 12, 128);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
span.cls_011 {
  font-family: Arial, serif;
  font-size: 10.1px;
  color: rgb(43, 42, 41);
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
}
div.cls_011 {
  font-family: Arial, serif;
  font-size: 10.1px;
  color: rgb(43, 42, 41);
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
}
span.cls_012 {
  font-family: Arial, serif;
  font-size: 11.1px;
  color: rgb(43, 42, 41);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
div.cls_012 {
  font-family: Arial, serif;
  font-size: 11.1px;
  color: rgb(43, 42, 41);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
span.cls_014 {
  font-family: Arial, serif;
  font-size: 10.1px;
  color: rgb(43, 42, 41);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
div.cls_014 {
  font-family: Arial, serif;
  font-size: 10.1px;
  color: rgb(43, 42, 41);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
span.cls_013 {
  font-family: Arial, serif;
  font-size: 10.1px;
  color: rgb(229, 12, 128);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
div.cls_013 {
  font-family: Arial, serif;
  font-size: 10.1px;
  color: rgb(229, 12, 128);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
span.cls_016 {
  font-family: Arial, serif;
  font-size: 5px;
  color: rgb(229, 12, 128);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
div.cls_016 {
  font-family: Arial, serif;
  font-size: 5px;
  color: rgb(229, 12, 128);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
span.cls_017 {
  font-family: Arial, serif;
  font-size: 5px;
  color: rgb(229, 12, 128);
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
}
div.cls_017 {
  font-family: Arial, serif;
  font-size: 5px;
  color: rgb(229, 12, 128);
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
}
span.cls_019 {
  font-family: Arial, serif;
  font-size: 8.1px;
  color: rgb(229, 12, 128);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
div.cls_019 {
  font-family: Arial, serif;
  font-size: 8.1px;
  color: rgb(229, 12, 128);
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}
</style>
