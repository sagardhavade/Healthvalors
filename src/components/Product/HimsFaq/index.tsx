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
