For non product focused forms
TYRIA_API_KEY IS IN ENV 
That key is gated to only forms Get/Post fyi
[11:45 AM]if for some reason you need to refretch the json body for form configuration:
GET to
https://www.tyriacore.app/api/v1/forms/frm_cf7dade5-7e28-419f-a82e-ce232bd0012a
{
    "data": {
        "id": "frm_cf7dade5-7e28-419f-a82e-ce232bd0012a",
        "name": "Contact Form",
        "description": "",
        "questions": [
            {
                "id": "2290b181-cd97-4744-b8fc-87a5d916c9e3",
                "label": "First Name:",
                "fieldName": "first_name",
                "fieldNameMode": "same",
                "showLabel": true,
                "labelBold": false,
                "visible": true,
                "visibility": "public",
                "editable": true,
                "type": "short-text",
                "placeholder": "First Name",
                "required": true
            },
            {
                "id": "9dc96eb6-d2c6-45a5-91b7-e824de65fdfc",
                "label": "Last Name:",
                "fieldName": "last_name",
                "fieldNameMode": "same",
                "showLabel": true,
                "labelBold": false,
                "visible": true,
                "visibility": "public",
                "editable": true,
                "type": "short-text",
                "placeholder": "Last Name",
                "required": true
            },
            {
                "id": "266f6a32-5ba5-4a9c-b99a-4e0067abd51a",
                "label": "Email:",
                "fieldName": "email",
                "fieldNameMode": "same",
                "showLabel": true,
                "labelBold": false,
                "visible": true,
                "visibility": "public",
                "editable": true,
                "type": "short-text",
                "placeholder": "Email",
                "required": true
            },
            {
                "id": "f3aa2c29-7132-4aa8-b596-36e13452b774",
                "label": "Phone Number:",
                "fieldName": "phone_number",
                "fieldNameMode": "same",
                "showLabel": true,
                "labelBold": false,
                "visible": true,
                "visibility": "public",
                "editable": true,
                "prefill": "",
                "type": "phone",
                "required": true,
                "defaultCountry": "US"
            },
            {
                "id": "67788f0e-3e2b-43eb-9e9f-0031ba178c1f",
                "label": "What is your gender?",
                "fieldName": "what_is_your_gender",
                "fieldNameMode": "same",
                "showLabel": true,
                "labelBold": false,
                "visible": true,
                "visibility": "public",
                "editable": true,
                "type": "select-one",
                "options": [
                    "Male",
                    "Female"
                ],
                "required": true
            },
            {
                "id": "f5cb586c-6957-462c-8dfa-08e390287850",
                "label": "State:",
                "fieldName": "state",
                "fieldNameMode": "same",
                "showLabel": true,
                "labelBold": false,
                "visible": true,
                "visibility": "public",
                "editable": true,
                "type": "short-text",
                "placeholder": "What state are you located in?",
                "required": true
            },
            {
                "id": "c12fc52d-9825-46f4-b03c-1d7b93dce6e5",
                "label": "Please indicate the areas of your body where you are experiencing pain, discomfort, or limitation.",
                "fieldName": "please_indicate_the_areas_of_your_body_where_you_are_experiencing_pain_discomfort_or_limitation",
                "fieldNameMode": "same",
                "showLabel": true,
                "labelBold": false,
                "visible": true,
                "visibility": "public",
                "editable": true,
                "type": "long-text",
                "placeholder": "Please explain location, pain if applicable, and any pertinent information prior to talking with us.",
                "required": false
            },
            {
                "id": "c105e28b-5761-4898-bd86-7751fd1db2e7",
                "label": "What are your favorite activities that your pain is holding you back from?",
                "fieldName": "what_are_your_favorite_activities_that_your_pain_is_holding_you_back_from",
                "fieldNameMode": "same",
                "showLabel": true,
                "labelBold": false,
                "visible": true,
                "visibility": "public",
                "editable": true,
                "type": "long-text",
                "placeholder": "Please list activities: pickleball, walking, sleeping, standing for too long, getting up from a chair, climbing stairs, etc.",
                "required": false
            },
            {
                "id": "96710b63-d616-48a2-9fac-2288b53107e1",
                "label": "What led you to Regenerative Revival?",
                "fieldName": "what_led_you_to_regenerative_revival",
                "fieldNameMode": "same",
                "showLabel": true,
                "labelBold": false,
                "visible": true,
                "visibility": "public",
                "editable": true,
                "type": "select-one",
                "options": [
                    "Dinner Seminar",
                    "Pickleball Tournament",
                    "Instagram",
                    "Facebook",
                    "LinkedIn",
                    "Website",
                    "Google Search",
                    "Andy Elliot",
                    "Julie Kennedy - Seed Wellness",
                    "Other"
                ],
                "required": true
            },
            {
                "id": "b6674704-3987-453c-a9f3-c2260e222e53",
                "label": "If you spoke to a team member, choose their name below:",
                "fieldName": "if_you_spoke_to_a_team_member_choose_their_name_below",
                "fieldNameMode": "same",
                "showLabel": true,
                "labelBold": false,
                "visible": true,
                "visibility": "public",
                "editable": true,
                "type": "select-one",
                "options": [
                    "Adam Berge",
                    "Benjamin Nelson",
                    "Dasa'n Fant",
                    "David Chavez",
                    "James Rivers",
                    "Karl Canniff",
                    "Noah Nelson",
                    "Reggie Lynch",
                    "Robert Monroe",
                    "Seth Berge",
                    "Theodore Clemens",
                    "Jared Novack",
                    "Advert Logix",
                    "Tyler Bearden",
                    "Chris Ehrlich",
                    "Julie Kennedy - Seed Wellness"
                ],
                "required": false
            },
            {
                "id": "5a12ac4a-0f54-44de-ad75-479b90068412",
                "label": "Everflow ID",
                "fieldName": "everflow_id",
                "fieldNameMode": "same",
                "showLabel": false,
                "labelBold": false,
                "visible": false,
                "visibility": "public",
                "editable": true,
                "type": "short-text",
                "placeholder": "",
                "required": false
            }
        ],
        "sharing": {
            "level": "workspace",
            "passwordHint": "",
            "linkExpiryDays": null,
            "createdAt": "2026-05-22T12:17:12.825Z"
        },
        "ownerId": "eJCfHeYC6tbhb7ZGFwca7K6XjjLIkwSG",
        "accessibleTo": {
            "users": [],
            "roles": [
                "2dbf5b53-e161-429e-807e-04da34697223",
                "1e70f7be-90e3-4555-b33c-c7125b7b73e6",
                "ea023851-da96-4fa1-aa6b-9e60b69a3e59",
                "owner"
            ],
            "teams": []
        },
        "submissionAccess": {
            "users": [],
            "roles": [
                "2dbf5b53-e161-429e-807e-04da34697223",
                "1e70f7be-90e3-4555-b33c-c7125b7b73e6",
                "ea023851-da96-4fa1-aa6b-9e60b69a3e59",
                "owner"
            ],
            "teams": []
        },
        "editorAccess": {
            "users": [],
            "roles": [
                "2dbf5b53-e161-429e-807e-04da34697223",
                "1e70f7be-90e3-4555-b33c-c7125b7b73e6",
                "ea023851-da96-4fa1-aa6b-9e60b69a3e59",
                "owner"
            ],
            "teams": []
        },
        "formKind": "form",
        "entityType": "lead",
        "leadCaptureMode": "lead-generation",
        "isInvoice": false,
        "createdAt": "2026-05-22T12:17:12.855Z"
    }
}

{"data":{"id":"frm_cf7dade5-7e28-419f-a82e-ce232bd0012a","name":"Contact Form","description":"","questions":[{"id":"2290b181-cd97-4744-b8fc-87a5d916c9e3","label":"First Name:","fieldName":"first_name","fieldNameMode":"same","showLabel":true,"labelBold":false,"visible":true,"visibility":"public","editable":true,"type":"short-text","placeholder":"First Name","required":true},{"id":"9dc96eb6-d2c6-45a5-91b7-e824de65fdfc","label":"Last Name:","fieldName":"last_name","fieldNameMode":"same","showLabel":true,"labelBold":false,"visible":true,"visibility":"public","editable":true,"type":"short-text","placeholder":"Last Name","required":true},{"id":"266f6a32-5ba5-4a9c-b99a-4e0067abd51a","label":"Email:","fieldName":"email","fieldNameMode":"same","showLabel":true,"labelBold":false,"visible":true,"visibility":"public","editable":true,"type":"short-text","placeholder":"Email","required":true},{"id":"f3aa2c29-7132-4aa8-b596-36e13452b774","label":"Phone Number:","fieldName":"phone_number","fieldNameMode":"same","showLabel":true,"labelBold":false,"visible":true,"visibility":"public","editable":true,"prefill":"","type":"phone","required":true,"defaultCountry":"US"},{"id":"67788f0e-3e2b-43eb-9e9f-0031ba178c1f","label":"What is your gender?","fieldName":"what_is_your_gender","fieldNameMode":"same","showLabel":true,"labelBold":false,"visible":true,"visibility":"public","editable":true,"type":"select-one","options":["Male","Female"],"required":true},{"id":"f5cb586c-6957-462c-8dfa-08e390287850","label":"State:","fieldName":"state","fieldNameMode":"same","showLabel":true,"labelBold":false,"visible":true,"visibility":"public","editable":true,"type":"short-text","placeholder":"What state are you located in?","required":true},{"id":"c12fc52d-9825-46f4-b03c-1d7b93dce6e5","label":"Please indicate the areas of your body where you are experiencing pain, discomfort, or limitation.","fieldName":"please_indicate_the_areas_of_your_body_where_you_are_experiencing_pain_discomfort_or_limitation","fieldNameMode":"same","showLabel":true,"labelBold":false,"visible":true,"visibility":"public","editable":true,"type":"long-text","placeholder":"Please explain location, pain if applicable, and any pertinent information prior to talking with us.","required":false},{"id":"c105e28b-5761-4898-bd86-7751fd1db2e7","label":"What are your favorite activities that your pain is holding you back from?","fieldName":"what_are_your_favorite_activities_that_your_pain_is_holding_you_back_from","fieldNameMode":"same","showLabel":true,"labelBold":false,"visible":true,"visibility":"public","editable":true,"type":"long-text","placeholder":"Please list activities: pickleball, walking, sleeping, standing for too long, getting up from a chair, climbing stairs, etc.","required":false},{"id":"96710b63-d616-48a2-9fac-2288b53107e1","label":"What led you to Regenerative Revival?","fieldName":"what_led_you_to_regenerative_revival","fieldNameMode":"same","showLabel":true,"labelBold":false,"visible":true,"visibility":"public","editable":true,"type":"select-one","options":["Dinner Seminar","Pickleball Tournament","Instagram","Facebook","LinkedIn","Website","Google Search","Andy Elliot","Julie Kennedy - Seed Wellness","Other"],"required":true},{"id":"b6674704-3987-453c-a9f3-c2260e222e53","label":"If you spoke to a team member, choose their name below:","fieldName":"if_you_spoke_to_a_team_member_choose_their_name_below","fieldNameMode":"same","showLabel":true,"labelBold":false,"visible":true,"visibility":"public","editable":true,"type":"select-one","options":["Adam Berge","Benjamin Nelson","Dasa'n Fant","David Chavez","James Rivers","Karl Canniff","Noah Nelson","Reggie Lynch","Robert Monroe","Seth Berge","Theodore Clemens","Jared Novack","Advert Logix","Tyler Bearden","Chris Ehrlich","Julie Kennedy - Seed Wellness"],"required":false},{"id":"5a12ac4a-0f54-44de-ad75-479b90068412","label":"Everflow ID","fieldName":"everflow_id","fieldNameMode":"same","showLabel":false,"labelBold":false,"visible":false,"visibility":"public","editable":true,"type":"short-text","placeholder":"","required":false}],"sharing":{"level":"workspace","passwordHint":"","linkExpiryDays":null,"createdAt":"2026-05-22T12:17:12.825Z"},"ownerId":"eJCfHeYC6tbhb7ZGFwca7K6XjjLIkwSG","accessibleTo":{"users":[],"roles":["2dbf5b53-e161-429e-807e-04da34697223","1e70f7be-90e3-4555-b33c-c7125b7b73e6","ea023851-da96-4fa1-aa6b-9e60b69a3e59","owner"],"teams":[]},"submissionAccess":{"users":[],"roles":["2dbf5b53-e161-429e-807e-04da34697223","1e70f7be-90e3-4555-b33c-c7125b7b73e6","ea023851-da96-4fa1-aa6b-9e60b69a3e59","owner"],"teams":[]},"editorAccess":{"users":[],"roles":["2dbf5b53-e161-429e-807e-04da34697223","1e70f7be-90e3-4555-b33c-c7125b7b73e6","ea023851-da96-4fa1-aa6b-9e60b69a3e59","owner"],"teams":[]},"formKind":"form","entityType":"lead","leadCaptureMode":"lead-generation","isInvoice":false,"createdAt":"2026-05-22T12:17:12.855Z"}}

Markdown file for AI agent to build the integration