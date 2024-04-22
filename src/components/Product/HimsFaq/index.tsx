"use client";

// import { Body, H1 } from "../design-system/formatting";
import QA from "./QA";

const dataQA = [
  {
    question: "Registration, Admission, Discharge and Transfer (RADT)",
    answer:
      "<b>Patient Registration</b>\n Provides access to all patient registration procedures – normal, Revisits and Emergency\nPatient Identification Number (UID(AADHAR)/CR No./ Organization specific No.)\nPatient Photo Capturing\nPatient ID Card with Barcode / RFID Card / Tags\nPatient Demographic Details \n Assigning Consulting Doctor to Patient \n OPD Visit and Appointment Scheduling\n Appointment reminder sent via SMS/Email to patient \nDoctors can view Patient Appointment Calendar\n<b>Admission</b>\nAdmission Scheduling\n Dynamic Display for Bed Status (Vacant/Vacant but not released/released but not cleaned etc.)\nRoom / Ward Booking for Patient\n Dependant Bed Facility\nNewborn Admissions will be carried out based on Mother baby linkage\nBooking facility on Doctor wise / Specialty wise\nIncludes scheduled and Emergency Admissions and Patient Inquires\nEnter and Update Admissions and Demographic Data into the system\nPatient Belt – Barcode /RFID interface with Handheld Scanner / PDA\nService Ordering\nViewing of Stay Information for a Patient\n<b> Discharges</b>\n Discharge of Patients and Discharge Summary edition.\n <b>Transfers</b>\n Ability to transfer patients between Beds and Wards\n Move Patient between Beds and Wards (Both Beds Occupied)",
  },
  {
    question: "Billing and Cash Counter",
    answer:
      "<b>Patient Registration</b>\n IPD Package creation\nHealth Check-up plan\nHealth Card\nAutomatic billing with manual overrides\n Discounting and subsidy\nDiscounting managed in 3 ways 1) Bill wise 2) Service wise 3) Authority wise\nPatient receipt managed in 3 ways 1) Cash 2) Credit and 3) Settle against Deposit\nCorporate and Insurance billing as per negotiated rates\nCo-pay facility\nRefund to patient, facility available against validation and verification of patients clinical transactions\nFor cashless patients cash bill can be generated if Noncash less flag is selected\nFor Cashless Patients , in case of “Not Applicable Services” Cash bill is generated and for “Applicable Services” Credit bill is generated separately\nService Tax and Rounding functionality are added in billing\nIn-patient bill monitoring\nAccepting patient’s payment as Deposit with transaction locking facility\nOnline Posting in Finance\nViewing of receipts\nBill printing and reprinting\nCash collection reports\nCashless flow for:\n(1) Insurance (2) Government Schemes (3) Corporate Clients (4) Charity/NGO/Trust/School (5) Ready format of insurance companies",
  },
  {
    question: "Patient Consultation – O/P and I/P.",
    answer:
      "<b>Outpatient</b>\n Viewing Scheduled Patient for the Day\nRecording Medical Observation and Records of Patient Consultation\nCapturing Patient’s data, document scanning and storage facility\nOrder Communication(1) Laboratory and Radiology Investigation Request(2)Procedure and Clinical Service Request\nDrug Prescription\nRegional Language Support for Prescription/Treatment Advise\nSpecial Alerts to Consultant\nBrowsing Medical History and Investigation Results\nInterfacing of Patient Calling System for Consultation\n <b>Inpatient</b>\nViewing Inpatient with Locations\nViewing Patient Out standing\nRecording Medical Observation and Records of Patient Consultation\n Order Communication (1) Laboratory and Radiology Investigation Request (2) Procedure and Clinical Service Request\n(3) Instructions to Nurses (4) Preparing / Revise Treatment order sheet\nDrug Prescription\nRegional Language Support for Prescription/Treatment Advise\nBrowsing Medical History and Investigation Results\nPreparing Discharge Summaries\nIssuing various types of Certificates such as Fitness, Leave, Birth, Death etc\n",
  },
  {
    question: "Electronic Health Record (EHR)",
    answer:
      "Patient health information including demographics.\nPatient Photo Capturing.\nProgress Notes.\nProblems.\nMedications.\nVital Signs.\nPast Medical History.\nImmunizations.\nAdministrative System Data.\nLaboratory System Data.\nRadiology System Reports.\nPharmacy System Data.\nComputerized Physician Order Entry.\nClinical Documentation.\nAbility to generate a complete record of clinical patient encounter, as well as supporting other care related activities directly or \nin-directly via interface.\nEHR enable the administrator to obtain data for billing, Physician to see trends in the effectiveness of treatments, a nurse to report an adverse reaction and Researcher to analyze.\nDoctor wise dynamic Medical Record generation facility.\n",
  },
  {
    question: "Laboratory Information Management System (LIMS)",
    answer:
      "Administrative and Clinic Management Reports\nConfigurable Test (1) Test Name. (2) Faculty to which it belongs to. (3) Test wise container defined. (4) Re-agent used . (5) Reference deviation ranges for panic high/ low etc. (6) Formula base test. (7) Multicolumn base test.\nTest request can be raised from OPD and Wards.\nSample Collection with Barcode Generation.\nConfiguration based on Sample Collection, Dispatch & Acknowledgement.\nComplete Specimen tracking.\nTest Results captured with machine interface and authorization facility.\nCumulative result check and parallel multiple approval/verification.\nReport indication using deviation data.\nTest Repeat facility (Incase of container breakage, sample haemolysed, missing, re –run).\nSample Dispatched to Patient Report delivered, tracking by Barcode.\nPatient test Trends and Co-relation graphs.\n",
  },

  {
    question: "Radiology Information System (RIS)",
    answer:
      "Templates stored in Microsoft Word / Open Office Format\nOther than Radiologist, Reports can be only viewed in .pdf format.\nIntegration with PACS\nRadiology Order Processing\nResult Verification & Reporting\nFilm Consumption\nScheduling of Appointment\n",
  },
  {
    question: "Blood Bank",
    answer:
      "Donor’s Registration.\nDonor’s Availabilities.\nOther Donor Detail.\nBlood Samples.\nCross Match.\nBlood Inventory Management.\nReport On Stock.\nProcedure and Transfer\n",
  },

  {
    question: "Diet & Kitchen.",
    answer:
      "Doctors / Nurse can suggest Diet Category like Liquid Food, Solid Food, Semi-Solid Food, Diet Food etc.\nDiet Package / Menu plan available.\nMaintained under 8 heads (Bed Tea, Break Fast, Healthy Drinks, Lunch, Snacks, Juice, Dinner, Milk).\nSpecial Screen for Dietitian.\nPatient Likes and Dislikes Recorded`.\nDietitian can view Patients Key Health Indicators, Drugs, Lab Results, Input/Output Investigations etc. and prescribes Diet for Patient Online.\nDietician reviews diet prescribed by the consultants – approve or amends.\nDiet details and calories.\nDiet KOT (Kitchen Order Ticket) for all Patients.\nGeneration of Sticker Sheet for Patient Diet including Patient Name, Ordered Food and Bed /Ward as per Diet KOT.\nNurse Entry Screen for recording Food Issued Timings to Patient.\n",
  },

  {
    question: "Operation Theatre (OT).",
    answer:
      "Option for Multiple Surgery for same patient in same OT.\nStandardization of each surgical procedure.\nOT charges calculated on Surgery wise/ Anesthesia type wise hourly rates.\nSurgery mapped with Surgery grade as per TPA-PPN standards.\nOT Scheduler for Scheduling, Cancellation, Re-scheduling of surgical procedure.\nSurgery Record for capturing & archiving Operations details, personnel involved during surgery.\nCaptures and keep tracks of medical equipments associated with operation.\nRecording of all materials and pharmacy issues to the patient during procedure.\nCaptures Diagnosis, pre / post operative and surgery notes.\nBuilt-in templates to capture information and allows to design user, need specific templates.\nAnesthesia note parameterized including Surgeon’s Pre-Operative Notes, Operative Consent, Surgeon’s Post-Operative Note.\nAnesthesia progress note available with OT vital detail represented in progress graphs.\nAlerts for allocated dates / time of specific resource previously scheduled.\nGeneration of pre-surgery list, consent forms etc.\nCaptures the Pre-Intra-Post operative notes.\nGenerates activity / efficiency reports related to OT.\nImage/Video Capturing capability.\nImage Centre - Central Storage of Image/Video.\n",
  },

  {
    question: "Infection Control Management & Quality Control",
    answer:
      "Patient Records / OT Module should be able to capture certain info required to do an CQI audit and analysis as per NABH.\n % of Medication Error.\n% of Transfusion Reactions.\nUrinary Tract Infection Rate.\nRespiratory Infection Rate.\nIntra-vascular device infection rate.\nSurgical site infection rate.\nBed Occupancy Rate and Average Length of Stay – (combined & specialty wise).\nIncidence of Needle stick injuries.\nIncidence of bed sores after admission.\nIncidence of falls, etc.\n",
  },

  {
    question: "Central Sterile Supply Department (CSSD)",
    answer:
      "Online Request for CSSD packs.\nLine packs / Instrument sets linked to surgery.\nSurgery wise pre alert/report for preparing sets for next day’s surgery.\nDefining Sets and it’s instrument – Inventory control.\nMaintains information related to production cycle, supply to clients and return of used products for Re-Cycling and Inventory of CSSD.\n",
  },

  {
    question: "Nursing Care Desk",
    answer:
      "Accessing all the Patients at a Particular Nursing Station.\nPatient Progress Recording & Monitoring.\nDrug Administration and Recording.\nViewing and processing Doctors Orders.\nTreatment Sheet.\nNursing Notes.\nVital Chart.\nIntake and Output Recording (Fluid Chart).\nViewing Archived Records and Investigation Reports.\nBed Transfer.\nNursing Sub Store Management.\nDischarge Intimation.\nOT Schedule Request.\nDiet Order.\n",
  },

  {
    question: "Roster Management",
    answer:
      "Duty Schedule for Doctors.\nDuty Schedule for Nursing Staff.\nDuty Schedule for Clinical and Non-clinical Staff.\nSchedule Printing.\nShift Change Request.\n",
  },

  {
    question: "Stores & Inventory Management",
    answer:
      "Supports Main Store & Multiple Sub Stores.\nABC Analysis categorized by Lead Time, Consumption, Criticality.\nVarious type of parameter can pass for item master such as product type, purchase & Sales unit, High Risk Item, Content & Instruction can be stored.\nTax Configuration (CST / VAT).\nStock Calculation on Period basis (Daily/Monthly/Quarterly/Yearly).\nStock Verification.\nItems can be mapped for each store.\nPurchase Requisition , Indent, Purchase Order Requisition, Approval, Audit.\nRate Contract.\nConsignee Management.\nGate Pass.\nGoods Receipt Note.\nGoods QC.\nOnline Bill Approval by concern HODs.\nPurchase Bill Passing with Credit Period Terms.\nPurchase Return.\nItem Issue against Requisition.\nItem Issue to Employee.\nItem Issued to Patient (for Bed Side).\nItem Return From Patient.\nItem Return From Employee.\nInventory Control tool Like MUSIC 3D.\nReorder Level report based on item consumption, Lead Time & MUSIC -3D Approach.\nVAT Report Such as 201, 201A, 201B, 201C, VAT Summary etc.\nVarious Decision Support & Analytical Report.\n",
  },

  {
    question: "Pharmacy",
    answer:
      "Defining Stock Levels for Various Items.\nSales Invoicing Cash, Credit & Cashless.\nOnline Stock Status (Batch-wise) during Sales\nView last 10 bills and last 10 times sales.\nControl Over Expiry/ Breakage.\nDrug Expiry and Expiry Aging Report.\nNon-moving, Slow-moving and Fast-moving Drugs Reports.\nPrescription wise Sales.\nSubstitute wise Sales.\nSales Return.\nVerification of purchase rates by Admin user.\nSupports all Tax Structures including VAT.\nVarious Analytical Reports on Sales & Return.\n",
  },

  {
    question: "Finance & Accounting",
    answer:
      "<b>Accounts Receivable</b>\nMaintenance Of Debtors.\nGeneration Of Receipts.\nGeneration Of Various Receivable Reports.\nReminder Letters For Cheque Returns.\n <b>Accounts Payable</b>\nMaintenance Of Bills Payable.\nGeneration of Payment Vouchers.\nGeneration of Refund Vouchers.\nMerge Payment for Cheque.\nCheque Printing.\nGeneration Of Various Payable Reports.\n <b>General</b>\nVoucher Entry.\nGeneration Of Various General Ledger Related Reports.\nBank Reconciliation.\nMultiple Adjustments.\nWrite – Off Vouchers.\nDebit / Credit Note.\nCosting & Budgeting.\nVoucher Type Wise Security.\n<b>Reports</b>\nDay Books Reports (Cash / Bank Books With Summary, Debit / Credit Note Registers With Summary).\nCash & Bank Positions Reports (With Summary).\nDivision Wise And Consolidated Sub Ledgers.\nDivision Wise And Consolidated General Ledgers.\nDivision Wise And Consolidated Trial Balance.\nCost/Profit Center Details.\nBank Reconciliation Statement.\nAdjustment Reports.\nAging Reports.\nProfit & Loss for Given Period.\nBalance Sheet.\n",
  },

  {
    question: "Human Resource Management System (HRMS)",
    answer:
      "Employee Records.\nRecruitment Process.\nDocument Management (Scanning and Storage) for Employee related documents, Photo, Certificates etc.\nParameterized Allowances, Deductions & Salary Process.\nTraining and Need Identification.\nPerformance Rating / Appraisal.\nService Book.\nAttendance Administration.\nOnline Leave, Tour, Permission, Shift Change Permission and Approval.\nOver Time Management.\nSpecial Reports for Government Departments.\nLoan and LIC Administration linked to Payslip.\nIncome Tax Form 16.\nPF Reports such as Form 3A, 6A, 12A, Form 5, Form 10 and more.\nSocial Benefit Administration.\nSeparation Process.\nBiometrics Device Interfacing for Auto Punch of Attendance.\n",
  },

  {
    question: "Patient Inquiry and Customer Care",
    answer:
      "<b>Patient Inquiry</b>\nRecording of all Patient Inquiries, Services provided by Hospital.\nEasy Follow-up Database for all Inquiries.\nFollow-up Screen for Telecallers, Status update, Next Schedule Date, Confirmed or Lost.\nIf Inquiry Status is confirmed and set for Patient Arrived, Patient CR No. is mapped.\nMIS data on Patient Inquiry available, Conversion Ratio (No. of Inquires Vs Actual Admission).\n <b>Customer Care</b>\nPatient Complaint Register – Customer Care Officer registers patient/relative complaints.\nService / Department / Staff Name is captured in the complaint.\nComplaint Email/SMS to respective Dept. Head.\nPatient Feedback Register – Feedback form received from patient can be entered into CCM module.\nCustomer Feed / Complaint Analysis – Customer Satisfaction.\nComplaint Solution or Response Register.\nAddress Directory for Marketing.\n",
  },

  {
    question: "Asset Management System",
    answer:
      "Exhaustive Asset Details, Copy Facility Of Asset Details.\nUser Entered Or Auto Asset Code Generation.\nCapitalization Of Assets.\nLease, Hire-Purchase, Insurance, Allotment, AMC Details, Shift Details.\nMultiple Levels Of Location For Asset.\nDepreciation Calculation According To Co. Act, IT Act.\nDepreciation Methods – SLM, WDV.\nSale / Discard Of Asset (Full / Partial).\nTransfer Of Asset.\nAttachment / Detachment Of Asset.\nChange Of State.\n",
  },

  {
    question: "Maintenance",
    answer:
      "Design Maintenance Plan for Equipments.\nPreventive Maintenance Schedule for Equipment.\nBreak-down Maintenance Registration.\nAllocation of Maintenance Job to Employee/Contractor.\nMaintenance Log and Status Report.\n",
  },

  {
    question: "Linen Management",
    answer:
      "Maintenance of Linen and their status.\nRequest for fresh Linen from Wards.\nCondemnation of Torn or Solid Linen.\nProcurement of fresh Linen Hygiene Module (Cleanliness Complaints and Response).\nRaising Maintenance and Other Service Request from various Departments.\nResponding to the Maintenance Request Raised.\n",
  },

  {
    question: "Medical Record Department (MRD)",
    answer:
      "Uploads Scanned Records (Referral letters, Treatment notes, Medical reports etc.).\nGeneric Medical Records.\nTracking of Case File.\nReports and Reminder for Submission of Notifiable Diseases.\nPatient Analytics.\n",
  },

  {
    question: "License Management",
    answer:
      "Recording of all Hospital Licenses with License Name, Type, Issuing Authority, Department, Effective Date, Expiry Date etc.\nFor Renewal, email facility to concern person for renewal and attachment of license copy-scanned image.\nReports and Reminder for Renewal of License before time\n",
  },

  {
    question: "User Management",
    answer:
      "Various levels of security built in at each level\nModule Unit Configuration\nModule Report Configuration\nUser Category Generation with mapping Units and Reports.\nUser Master\nUser base Module rights\nBlocking the user\nAllowing the user to change password\n",
  },

  {
    question: "Administration",
    answer:
      "Hospital Master Creation.\nHospital Configuration.\nHospital Module Map.\nDashboard for users.\nPatient Task.\nGeneral Notice.\nEmployee Task.\nAudit Trail.\nUser’s Log in Details.\n",
  },

  {
    question: "Interfacing with Equipments",
    answer:
      "Billing unit with Swap Card for Credit Card Transactions.\nTime and Attendance Recording Systems with Bio-metrics, Scanners, Swap Cards etc.\nLab Equipments / Analyzers for Direct Transfer of Results to Reports.\nBar Code, Smart Card, RFID, Biometric etc.\nPDA, Mobile Devices and Tablet PC.\nDigital Display Boards for Patient Calling System.\nNurse Calling System of Nursing Station.\nPACS (Picture Archival and Communication System).\nSMS/Email.\n",
  },
];

const FAQ = () => {
  return (
    <>
      <h1 className="mb-4  text-center text-2xl font-bold !leading-tight text-black dark:text-white sm:text-2xl md:text-[35px]">
        Features And Modules
      </h1>
      {/* {dataQA.map((data, i) => (
        <div key={i}>
          <QA question={data.question} answer={data.answer} />
        </div>
      ))} */}
      {/* {dataQA.map((data, i) => {
        const formattedAnswer = data.answer.replace(/\n/g, "<br/>");
        return (
          <div key={i}>
            <QA
              question={data.question}
              answer={
                <span dangerouslySetInnerHTML={{ __html: formattedAnswer }} />
              }
            />
          </div>
        );
      })} */}
      {dataQA.map((data, i) => {
        // Replace newline characters with <br/> tags
        const formattedAnswer = data.answer.replace(/\n/g, "<br/>");

        // Replace <b>...</b> tags with actual bold HTML tags
        const formattedAnswerWithBold = formattedAnswer.replace(
          /<b>(.*?)<\/b>/g,
          "<strong>$1</strong>",
        );

        return (
          <div key={i}>
            <QA
              question={data.question}
              answer={
                <span
                  dangerouslySetInnerHTML={{ __html: formattedAnswerWithBold }}
                />
              }
            />
          </div>
        );
      })}
    </>
  );
};

export default FAQ;
