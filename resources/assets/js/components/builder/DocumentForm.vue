<template>
  <div class="row">
    <div class="col-12 col-md-6">
      <document-pdf :form-data="form"></document-pdf>
    </div>
    <div class="col-12 offset-md-1 col-md-5">
      <b-form
        @submit="onSubmit"
        @reset="onReset"
        :disabled="loading"
        v-if="show"
      >
        <fieldset>
          <legend>Section A - Measure Enterprise/Business Entity</legend>
          <b-form-group
            id="date-issue"
            label="1. Date of Issue:"
            label-for="date-issue"
          >
            <b-form-input
              id="date-issue"
              v-model="form.issueDate"
              type="date"
              required
              placeholder="Select Issue Date"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="enterprise-name"
            label="2. Enterprise Name(Full Name): "
            label-for="enterprise-name"
          >
            <b-form-input
              id="enterprise-name"
              v-model="form.enterpriseName"
              type="text"
              required
              placeholder="Enter the name of the enterprise"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="trade-name"
            label="3. Trade Name (If Applicable)"
            label-for="trade-name"
          >
            <b-form-input
              id="trade-name"
              v-model="form.tradeName"
              required
              placeholder="Enter the name of the trade"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="registration-number"
            label="4. Registration Number:"
            label-for="registration-number"
          >
            <b-form-input
              id="registration-number"
              v-model="form.registrationNumber"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="entity-type"
            label="5. Type of Entity (CC, PTY Ltd, etc)"
            label-for="entity-type"
          >
            <b-form-input
              id="entity-type"
              v-model="form.entityType"
              required
              placeholder="Enter the type of entity"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="physical-addr"
            label="6. Physical Address"
            label-for="physical-addr"
          >
            <b-form-textarea
              id="physical-addr"
              v-model="form.physicalAddress"
              required
              placeholder="Enter your physical address..."
            ></b-form-textarea>
          </b-form-group>
        </fieldset>
        <fieldset>
          <legend>Section B - Enterprise Ownership</legend>
          <b-form-group
            id="black-owned-enterprise"
            label="7. The % Black Owned Enterprise: "
            label-for="black-owned-enterprise"
          >
            <b-form-input
              id="black-owned-enterprise"
              v-model="form.percentageBlackOwnedEnterprise"
              type="number"
              :min="0"
              :max="100"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="black-owned-female-enterprise"
            label="8. The % Black Female Owned Enterprise is: "
            label-for="black-owned-female-enterprise"
          >
            <b-form-input
              id="black-owned-female-enterprise"
              v-model="form.percentageBlackFemaleOwnedEnterprise"
              type="number"
              :min="0"
              :max="100"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="black-owned-designated-enterprise"
            label="9. The % Black Designated Group Owned Enterprise is: "
            label-for="black-owned-designated-enterprise"
          >
            <b-form-input
              id="black-owned-designated-enterprise"
              v-model="form.percentageBlackDesignatedGroupEnterprise"
              type="number"
              :min="0"
              :max="100"
              required
            ></b-form-input>
          </b-form-group>
        </fieldset>
        <fieldset>
          <legend>Section C - Group Enterprise Ownership</legend>
          <b-form-group
            id="black-owned-youth"
            label="10. The % Black Youth is: "
            label-for="black-owned-youth"
          >
            <b-form-input
              id="black-owned-youth"
              v-model="form.percentageBlackYouth"
              type="number"
              :min="0"
              :max="100"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="black-owned-youth"
            label="11. The % Black Youth is: "
            label-for="black-owned-youth"
          >
            <b-form-input
              id="black-owned-youth"
              v-model="form.percentageBlackYouth"
              type="number"
              :min="0"
              :max="100"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="black-owned-disabled"
            label="11. The % Black Disabled is: "
            label-for="black-owned-disabled"
          >
            <b-form-input
              id="black-owned-disabled"
              v-model="form.percentageBlackDisabled"
              type="number"
              :min="0"
              :max="100"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="black-owned-unemployed"
            label="12. The % Black Unemployed is: "
            label-for="black-owned-unemployed"
          >
            <b-form-input
              id="black-owned-unemployed"
              v-model="form.percentageBlackUnemployed"
              type="number"
              :min="0"
              :max="100"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="black-owned-rural-areas"
            label="13. The % Black People living in Rural areas  is: "
            label-for="black-owned-rural-areas"
          >
            <b-form-input
              id="black-owned-rural-areas"
              v-model="form.percentageBlackRuralAreas"
              type="number"
              :min="0"
              :max="100"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="black-owned-military-veterans"
            label="14. The % Black Military Veterans is: "
            label-for="black-owned-rural-areas"
          >
            <b-form-input
              id="black-owned-military-veterans"
              v-model="form.percentageBlackMilitaryVeterans"
              type="number"
              :min="0"
              :max="100"
              required
            ></b-form-input>
          </b-form-group>
        </fieldset>
        <fieldset>
          <legend>Section D - Financial Statments</legend>
          <b-form-group
            id="financial-year-end"
            label="15. Based on the Financial Statements/Management Accounts and other
        information available on the latest financial year-end"
            label-for="financial-year-end"
          >
            <b-form-input
              id="financial-year-end"
              v-model="form.financialYearEndAmount"
              type="number"
              :min="0"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group>
            <b-form-radio-group
              v-model="form.enterpriseOwnership"
              :options="ownerShipOptions"
              name="radio-inline"
              stacked
            ></b-form-radio-group>
          </b-form-group>
        </fieldset>
        <fieldset>
          <legend>Section E - Consent</legend>
          <b-form-group
            id="consent-name"
            label="16. Name and Surname"
            label-for="consent-name"
          >
            <b-form-input
              id="trade-name"
              v-model="form.consentFullName"
              required
              placeholder="Enter a fullname with name and surname"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="consent-idnumber"
            label="17. ID Number"
            label-for="consent-idnumber"
          >
            <b-form-input
              id="trade-name"
              v-model="form.consentIdNumber"
              required
              placeholder="Enter a valid ID Number"
            ></b-form-input>
          </b-form-group>
        </fieldset>

        <b-button type="submit" variant="primary">Generate And Print</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <!-- <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>-->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { api } from "../../config";
import DocumentPdf from "./DocumentPdf";

export default {
  name: "DocumentForm",
  components: {
    DocumentPdf,
  },
  data() {
    return {
      form: {
        issueDate: "",
        enterpriseName: "",
        tradeName: "",
        registrationNumber: "",
        entityType: "",
        physicalAddress: "",
        percentageBlackOwnedEnterprise: 0,
        percentageBlackFemaleOwnedEnterprise: 0,
        percentageBlackDesignatedGroupEnterprise: 0,
        percentageBlackYouth: 0,
        percentageBlackDisabled: 0,
        percentageBlackUnemployed: 0,
        percentageBlackRuralAreas: 0,
        percentageBlackMilitaryVeterans: 0,
        financialYearEndAmount: 0,
        enterpriseOwnership: "100BlackOwnedFounderCEO",
        consentFullName: "Name and Surname",
        consentIdNumber: "000000-0000-000",
      },
      ownerShipOptions: [
        { text: "100% Black Owned", value: "100BlackOwnedFounderCEO" },
        { text: "At least 51% Black Owned", value: "51moreBlackOwned" },
        { text: "Less than 51% Black Owned", value: "51LessBlackOwned" },
      ],
      show: true,
      loading: false,
      linktoFile: null,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.loading = true;
      axios
        .post(api.documentBuilder, this.form)
        .then(({ data }) => {
          this.linktoFile = data.url;
          this.$noty.success(data.message);
          this.$store.commit(
            "documentbuilder/GET_FILE_VIEW_URL",
            this.linktoFile,
          );
          this.$router.push({ name: "documentViewer" });
          this.loading = false;
        })
        .catch(err => {
          err.response.data.error && this.$noty.error(err.response.data.error);
          console.error(err);
        });
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.issueDate = "";
      this.form.enterpriseName = "";
      this.form.tradeName = "";
      this.form.registrationNumber = "";
      this.form.entityType = "";
      this.form.physicalAddress = "";
      this.form.percentageBlackOwnedEnterprise = 0;
      this.form.percentageBlackFemaleOwnedEnterprise = 0;
      this.form.percentageBlackDesignatedGroupEnterprise = 0;
      this.form.percentageBlackYouth = 0;
      this.form.percentageBlackDisabled = 0;
      this.form.percentageBlackUnemployed = 0;
      this.form.percentageBlackRuralAreas = 0;
      this.form.percentageBlackMilitaryVeterans = 0;
      this.form.financialYearEndAmount = 0;
      this.form.enterpriseOwnership = "100BlackOwnedFounderCEO";
      this.form.consentFullName = "Name and Surname";
      this.form.consentIdNumber = "000000-0000-000";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
