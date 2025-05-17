// src/app/data/analysisResults.js
const analysisResults = {
    // Framework Alignment data structure
    frameworkAlignment: {
      "partnerName": "Sport Y",
      "frameworkAlignment": [
        {
          "principleId": 1,
          "principleName": "Organisational/Legal Compliance",
          "focusAreaCount": 2,
          "elements": ["Safeguarding", "Welsh Language"],
          "implementationStatus": "In Progress",
          "completionPercentage": 30
        },
        {
          "principleId": 2,
          "principleName": "People and Cultures",
          "focusAreaCount": 1,
          "elements": ["Board Composition"],
          "implementationStatus": "Not Started",
          "completionPercentage": 0
        },
        {
          "principleId": 3,
          "principleName": "Strategy",
          "focusAreaCount": 2,
          "elements": ["Strategic Plan", "EDI"],
          "implementationStatus": "In Progress",
          "completionPercentage": 45
        },
        {
          "principleId": 4,
          "principleName": "Effectively Run Organisation",
          "focusAreaCount": 0,
          "elements": [],
          "implementationStatus": "Not Started",
          "completionPercentage": 0
        },
        {
          "principleId": 5,
          "principleName": "Finance",
          "focusAreaCount": 0,
          "elements": [],
          "implementationStatus": "Not Started",
          "completionPercentage": 0
        }
      ]
    },
    
    // Theme Distribution data structure
    themeDistribution: {
      "totalPartners": 3,
      "principleDistribution": [
        {
          "principleId": 1,
          "principleName": "Organisational/Legal Compliance",
          "partnerCount": 2,
          "percentage": 28.5,
          "elements": [
            {
              "elementId": "1.2",
              "elementName": "Safeguarding",
              "partnerCount": 2,
              "partners": ["Sport Y", "Partner B"]
            },
            {
              "elementId": "1.7",
              "elementName": "Welsh Language",
              "partnerCount": 1,
              "partners": ["Sport Z"]
            }
          ]
        },
        {
          "principleId": 2,
          "principleName": "People and Cultures",
          "partnerCount": 3,
          "percentage": 35.7,
          "elements": [
            {
              "elementId": "2.3",
              "elementName": "Directors Recruitment/Appointment",
              "partnerCount": 2,
              "partners": ["Partner B", "Sport Z"]
            },
            {
              "elementId": "2.4",
              "elementName": "Organisational Culture and Behaviours",
              "partnerCount": 1,
              "partners": ["Partner A"]
            }
          ]
        },
        {
          "principleId": 3,
          "principleName": "Strategy",
          "partnerCount": 3,
          "percentage": 21.4,
          "elements": [
            {
              "elementId": "3.1",
              "elementName": "Strategic Plan",
              "partnerCount": 2,
              "partners": ["Partner A", "Sport Y"]
            },
            {
              "elementId": "3.3",
              "elementName": "EDI",
              "partnerCount": 2,
              "partners": ["Sport Y", "Partner B"]
            }
          ]
        },
        {
          "principleId": 4,
          "principleName": "Effectively Run Organisation",
          "partnerCount": 1,
          "percentage": 7.1,
          "elements": [
            {
              "elementId": "4.1",
              "elementName": "Effective Meetings",
              "partnerCount": 1,
              "partners": ["Partner B"]
            }
          ]
        },
        {
          "principleId": 5,
          "principleName": "Finance",
          "partnerCount": 1,
          "percentage": 7.1,
          "elements": [
            {
              "elementId": "5.1",
              "elementName": "Financial Compliance",
              "partnerCount": 1,
              "partners": ["Sport U"]
            }
          ]
        }
      ]
    },
    
    // Support Request data structure
    supportRequests: {
      "partnerName": "Sport Y",
      "supportRequests": [
        {
          "requestId": "edi-support",
          "supportArea": "EDI training",
          "cfPrinciple": {
            "principleId": 3,
            "principleName": "Strategy",
            "elementId": "3.3",
            "elementName": "EDI"
          },
          "requestedTimeline": "2025-02",
          "context": "Support to complete the M2iF diagnostic tool",
          "status": "Requested",
          "developmentArea": "EDI -- Moving to Inclusion"
        },
        {
          "requestId": "safeguarding-support",
          "supportArea": "Safeguarding level 3",
          "cfPrinciple": {
            "principleId": 1,
            "principleName": "Organisational/Legal Compliance",
            "elementId": "1.2",
            "elementName": "Safeguarding"
          },
          "requestedTimeline": "2025-11",
          "context": "Support with CPSU assessment",
          "status": "Scheduled",
          "developmentArea": "Achieve level 3 safeguarding"
        }
      ]
    },
    
    // Implementation Timeline data
    implementationTimeline: {
      "partnerName": "Partner A",
      "timelinePeriod": "2025-04-01 to 2026-03-31",
      "activities": [
        {
          "activityId": "org-strategy-1",
          "areaTitle": "Organisational Strategy Development",
          "activity": "Formulate the Strategy Team",
          "cfPrinciple": {
            "principleId": 3,
            "principleName": "Strategy"
          },
          "startDate": "2025-04",
          "endDate": "2025-07",
          "timeframeOriginal": "July 2025",
          "timeframeStandardized": {
            "type": "specific",
            "startQuarter": "Q1 2025-26",
            "endQuarter": "Q1 2025-26"
          },
          "milestone": "Initial SWOT and goals in 3 months",
          "milestoneDate": "2025-07",
          "status": "In Progress",
          "statusPercentage": 30,
          "leadPerson": "CEO",
          "progressDetails": "Strategy team established, initial meetings held",
          "dependencies": [],
          "resourceIntensity": "Medium"
        },
        {
          "activityId": "gov-doc-review-1",
          "areaTitle": "Review governing document",
          "activity": "Set up sub-group with Terms of Reference",
          "cfPrinciple": {
            "principleId": 1,
            "principleName": "Organisational/Legal Compliance"
          },
          "startDate": "2025-05",
          "endDate": "2025-07",
          "timeframeOriginal": "May 2025",
          "timeframeStandardized": {
            "type": "specific",
            "startQuarter": "Q1 2025-26",
            "endQuarter": "Q1 2025-26"
          },
          "milestone": "Board after 2 months",
          "milestoneDate": "2025-07",
          "status": "Not Started",
          "statusPercentage": 0,
          "leadPerson": "Company Secretary",
          "progressDetails": "",
          "dependencies": [],
          "resourceIntensity": "Low"
        }
      ]
    },
    
    // Development Area data structure
    developmentAreas: {
      "partnerName": "Sport Y",
      "developmentAreas": [
        {
          "areaId": "edi-development",
          "areaTitle": "EDI -- Moving to Inclusion",
          "cfMapping": {
            "principleId": 3,
            "principleName": "Insight, Engagement & Strategy",
            "elementId": "3.3",
            "elementName": "EDI (Equality, Diversity & Inclusion)"
          },
          "objective": "Develop equality, diversity and inclusion awareness and practices within Sport Y",
          "actions": [
            "Complete the M2iF diagnostic tool via the M2iF website",
            "Engage with a M2iF mentor",
            "Reflect with and implement recommendations from the framework"
          ],
          "progressStatus": "In Progress",
          "progressDetails": "Mentor has been assigned to our organisation. Induction meeting completed on 21/02/2025",
          "timeframe": "End of February 2026",
          "leadPerson": "EDI Working group / EDI Lead"
        },
        {
          "areaId": "strategy-review",
          "areaTitle": "Strategy review",
          "cfMapping": {
            "principleId": 3,
            "principleName": "Insight, Engagement & Strategy",
            "elementId": "3.1",
            "elementName": "Strategic Plan"
          },
          "objective": "Develop a comprehensive, insight led strategy for Sport Y",
          "actions": [
            "Review and redefine the mission and vision",
            "Gather insight and data to inform the goals",
            "Develop the strategy and share with members for feedback",
            "Implementation of the strategy",
            "Monitoring and evaluation"
          ],
          "progressStatus": "In Progress",
          "progressDetails": "Initial planning phase in process to review the mission and vision",
          "timeframe": "Summer 2026",
          "leadPerson": "Board and Executive Leads"
        }
      ]
    }
  };
  
  export default analysisResults;