// src/app/data/singlePartnerAnalysis.js

const singlePartnerAnalysis = {
    // "partner-a": {
    // id: "partner-a",
    // name: "Partner A",
    // Basic partner information
      "angling-cymru": {
       
      id: "angling-cymru",
      name: "Angling Cymru",
      documentDate: "2025-01-15",
      
      // Framework alignment summary - shows mapping to Capability Framework principles
      frameworkAlignment: [
        {
          principleId: 3,
          principleName: "Insight, Engagement & Strategy",
          focusAreaCount: 1,
          elements: ["3.1 Strategic Plan"],
          implementationStatus: "In Progress",
          completionPercentage: 25,
          gipExcerpts: ["Create a comprehensive, aligned, and forward-looking strategy"]
        },
        {
          principleId: 1,
          principleName: "Organisational/Legal Compliance",
          focusAreaCount: 1,
          elements: ["1.1 Governing Document(s) and Review"],
          implementationStatus: "Not Started",
          completionPercentage: 0,
          gipExcerpts: ["Review governing document fit for purpose", "Agree WHO and HOW"]
        },
        {
          principleId: 4,
          principleName: "Effectively Run Organisation",
          focusAreaCount: 1,
          elements: ["4.8 Policies and Procedures (Non-Legal)"],
          implementationStatus: "Not Started",
          completionPercentage: 0,
          gipExcerpts: ["Review HR Manual", "New HR Manual compliant & current"]
        }
      ],
      
      // Detailed improvement areas from GIP
      developmentAreas: [
        {
          areaId: "org-strategy-development",
          areaTitle: "Organisational Strategy Development",
          cfMapping: {
            principleId: 3,
            principleName: "Insight, Engagement & Strategy",
            elementId: "3.1",
            elementName: "Strategic Plan"
          },
          objective: "Create a comprehensive, aligned, and forward-looking strategy",
          actions: [
            "Formulate the Strategy Team (include board members, executives, and department heads)",
            "Conduct a SWOT analysis to identify strengths, weaknesses, opportunities, and threats",
            "Define vision, mission, and strategic goals",
            "Outline KPIs and success metrics",
            "Gather input from stakeholders (staff, clients, partners)",
            "Draft the strategy document and circulate for feedback",
            "Finalise and approve by board",
            "Roll out the strategy with a communication plan"
          ],
          progressStatus: "In Progress",
          progressDetails: "Strategy team established, initial planning underway",
          timeframe: "July 2025",
          leadPerson: "CEO",
          startDate: "2025-01",
          endDate: "2025-07"
        },
        {
          areaId: "governing-document-review",
          areaTitle: "Review governing document",
          cfMapping: {
            principleId: 1,
            principleName: "Organisational/Legal Compliance",
            elementId: "1.1",
            elementName: "Governing Document(s) and Review"
          },
          objective: "Governing document fit for purpose, Agree WHO and HOW",
          actions: [
            "Set up sub-group(SG) with Terms of Reference and appoint 3 people",
            "SG to mark-up required changes with reasons",
            "Board to review suggested changes",
            "Final document prepared and circulated to members for consultation",
            "AGM notice -- special resolution"
          ],
          progressStatus: "Not Started",
          progressDetails: "",
          timeframe: "May 2025",
          leadPerson: "Company Secretary",
          startDate: "2025-02",
          endDate: "2025-05"
        },
        {
          areaId: "hr-manual-review",
          areaTitle: "Review HR Manual",
          cfMapping: {
            principleId: 4,
            principleName: "Effectively Run Organisation",
            elementId: "4.8",
            elementName: "Policies and Procedures (Non-Legal)"
          },
          objective: "New HR Manual compliant & current",
          actions: [
            "Confirm person(s) undertaking review",
            "X-ref to new legislation",
            "Consult staff re new holiday process etc."
          ],
          progressStatus: "Not Started",
          progressDetails: "",
          timeframe: "August 2025",
          leadPerson: "HR Director",
          startDate: "2025-05",
          endDate: "2025-08"
        }
      ],
      
      // Support requests extracted from GIP
      supportRequests: [
        {
          requestId: "strategy-consultant",
          supportArea: "Strategy consultant",
          cfMapping: {
            principleId: 3,
            elementId: "3.1",
            elementName: "Strategic Plan"
          },
          requestedTimeline: "2025-04",
          context: "Strategy consultant for initial stages",
          status: "Requested",
          developmentArea: "Organisational Strategy Development",
          gipExcerpt: "Strategy consultant for initial stages"
        },
        {
          requestId: "benchmarking-reports",
          supportArea: "Benchmarking reports",
          cfMapping: {
            principleId: 3,
            elementId: "3.1",
            elementName: "Strategic Plan"
          },
          requestedTimeline: "2025-04",
          context: "Benchmarking reports from similar organisations",
          status: "Requested",
          developmentArea: "Organisational Strategy Development",
          gipExcerpt: "Benchmarking reports from similar organisations"
        },
        {
          requestId: "workshop-facilitation",
          supportArea: "Workshop facilitation",
          cfMapping: {
            principleId: 3,
            elementId: "3.1",
            elementName: "Strategic Plan"
          },
          requestedTimeline: "2025-05",
          context: "Workshop facilitation services for brainstorming sessions",
          status: "Requested",
          developmentArea: "Organisational Strategy Development",
          gipExcerpt: "Workshop facilitation services for brainstorming sessions"
        },
        {
          requestId: "governance-document-support",
          supportArea: "Legal consultation",
          cfMapping: {
            principleId: 1,
            elementId: "1.1",
            elementName: "Governing Document(s) and Review"
          },
          requestedTimeline: "2025-03",
          context: "2 initial hours support from consultant/legal",
          status: "Requested",
          developmentArea: "Review governing document",
          gipExcerpt: "2 initial hours support from consultant/legal"
        },
        {
          requestId: "hr-expertise",
          supportArea: "HR expertise",
          cfMapping: {
            principleId: 4,
            elementId: "4.8",
            elementName: "Policies and Procedures (Non-Legal)"
          },
          requestedTimeline: "2025-06",
          context: "Access to HR expertise/company for some sections and final check of whole",
          status: "Requested",
          developmentArea: "Review HR Manual",
          gipExcerpt: "Access to HR expertise/company for some sections and final check of whole"
        }
      ],
      
      // Implementation timeline with all activities
      implementationTimeline: {
        timelinePeriod: "2025-01-01 to 2025-12-31",
        activities: [
          {
            activityId: "org-strategy-1",
            areaTitle: "Organisational Strategy Development",
            activity: "Formulate the Strategy Team",
            cfMapping: {
              principleId: 3,
              principleName: "Insight, Engagement & Strategy"
            },
            startDate: "2025-01",
            endDate: "2025-02",
            timeframeOriginal: "January-February 2025",
            timeframeStandardized: {
              type: "range",
              startQuarter: "Q4 2024-25",
              endQuarter: "Q4 2024-25"
            },
            milestone: "Strategy Team formed",
            milestoneDate: "2025-02-15",
            status: "Completed",
            statusPercentage: 100,
            leadPerson: "CEO",
            dependencies: []
          },
          {
            activityId: "org-strategy-2",
            areaTitle: "Organisational Strategy Development",
            activity: "Conduct SWOT analysis",
            cfMapping: {
              principleId: 3,
              principleName: "Insight, Engagement & Strategy"
            },
            startDate: "2025-02",
            endDate: "2025-04",
            timeframeOriginal: "February-April 2025",
            timeframeStandardized: {
              type: "range",
              startQuarter: "Q4 2024-25",
              endQuarter: "Q1 2025-26"
            },
            milestone: "Initial SWOT and goals in 3 months",
            milestoneDate: "2025-04-15",
            status: "In Progress",
            statusPercentage: 50,
            leadPerson: "CEO",
            dependencies: ["org-strategy-1"]
          },
          {
            activityId: "org-strategy-3",
            areaTitle: "Organisational Strategy Development",
            activity: "Define vision, mission, and strategic goals",
            cfMapping: {
              principleId: 3,
              principleName: "Insight, Engagement & Strategy"
            },
            startDate: "2025-04",
            endDate: "2025-05",
            timeframeOriginal: "April-May 2025",
            timeframeStandardized: {
              type: "range",
              startQuarter: "Q1 2025-26",
              endQuarter: "Q1 2025-26"
            },
            milestone: "",
            milestoneDate: "",
            status: "Not Started",
            statusPercentage: 0,
            leadPerson: "CEO",
            dependencies: ["org-strategy-2"]
          },
          {
            activityId: "org-strategy-4",
            areaTitle: "Organisational Strategy Development",
            activity: "Draft strategy document",
            cfMapping: {
              principleId: 3,
              principleName: "Insight, Engagement & Strategy"
            },
            startDate: "2025-05",
            endDate: "2025-06",
            timeframeOriginal: "May-June 2025",
            timeframeStandardized: {
              type: "range",
              startQuarter: "Q1 2025-26",
              endQuarter: "Q1 2025-26"
            },
            milestone: "Draft document in 6 months",
            milestoneDate: "2025-06-15",
            status: "Not Started",
            statusPercentage: 0,
            leadPerson: "CEO",
            dependencies: ["org-strategy-3"]
          },
          {
            activityId: "org-strategy-5",
            areaTitle: "Organisational Strategy Development",
            activity: "Finalise and launch strategy",
            cfMapping: {
              principleId: 3,
              principleName: "Insight, Engagement & Strategy"
            },
            startDate: "2025-06",
            endDate: "2025-07",
            timeframeOriginal: "June-July 2025",
            timeframeStandardized: {
              type: "range",
              startQuarter: "Q1 2025-26",
              endQuarter: "Q2 2025-26"
            },
            milestone: "Strategy launch at 12 months",
            milestoneDate: "2025-07-15",
            status: "Not Started",
            statusPercentage: 0,
            leadPerson: "CEO",
            dependencies: ["org-strategy-4"]
          },
          {
            activityId: "gov-doc-1",
            areaTitle: "Review governing document",
            activity: "Set up sub-group with Terms of Reference",
            cfMapping: {
              principleId: 1,
              principleName: "Organisational/Legal Compliance"
            },
            startDate: "2025-02",
            endDate: "2025-03",
            timeframeOriginal: "February-March 2025",
            timeframeStandardized: {
              type: "range",
              startQuarter: "Q4 2024-25",
              endQuarter: "Q4 2024-25"
            },
            milestone: "",
            milestoneDate: "",
            status: "Not Started",
            statusPercentage: 0,
            leadPerson: "Company Secretary",
            dependencies: []
          },
          {
            activityId: "gov-doc-2",
            areaTitle: "Review governing document",
            activity: "Review and propose changes",
            cfMapping: {
              principleId: 1,
              principleName: "Organisational/Legal Compliance"
            },
            startDate: "2025-03",
            endDate: "2025-04",
            timeframeOriginal: "March-April 2025",
            timeframeStandardized: {
              type: "range",
              startQuarter: "Q4 2024-25",
              endQuarter: "Q1 2025-26"
            },
            milestone: "Board after 2 months",
            milestoneDate: "2025-04-15",
            status: "Not Started",
            statusPercentage: 0,
            leadPerson: "Company Secretary",
            dependencies: ["gov-doc-1"]
          },
          {
            activityId: "gov-doc-3",
            areaTitle: "Review governing document",
            activity: "Circulate and finalise document",
            cfMapping: {
              principleId: 1,
              principleName: "Organisational/Legal Compliance"
            },
            startDate: "2025-04",
            endDate: "2025-05",
            timeframeOriginal: "April-May 2025",
            timeframeStandardized: {
              type: "range",
              startQuarter: "Q1 2025-26",
              endQuarter: "Q1 2025-26"
            },
            milestone: "",
            milestoneDate: "",
            status: "Not Started",
            statusPercentage: 0,
            leadPerson: "Company Secretary",
            dependencies: ["gov-doc-2"]
          },
          {
            activityId: "hr-manual-1",
            areaTitle: "Review HR Manual",
            activity: "Confirm review team and scope",
            cfMapping: {
              principleId: 4,
              principleName: "Effectively Run Organisation"
            },
            startDate: "2025-05",
            endDate: "2025-06",
            timeframeOriginal: "May-June 2025",
            timeframeStandardized: {
              type: "range",
              startQuarter: "Q1 2025-26",
              endQuarter: "Q1 2025-26"
            },
            milestone: "6 weeks",
            milestoneDate: "2025-06-15",
            status: "Not Started",
            statusPercentage: 0,
            leadPerson: "HR Director",
            dependencies: []
          },
          {
            activityId: "hr-manual-2",
            areaTitle: "Review HR Manual",
            activity: "Update manual and consult staff",
            cfMapping: {
              principleId: 4,
              principleName: "Effectively Run Organisation"
            },
            startDate: "2025-06",
            endDate: "2025-07",
            timeframeOriginal: "June-July 2025",
            timeframeStandardized: {
              type: "range",
              startQuarter: "Q1 2025-26",
              endQuarter: "Q2 2025-26"
            },
            milestone: "8 weeks",
            milestoneDate: "2025-07-31",
            status: "Not Started",
            statusPercentage: 0,
            leadPerson: "HR Director",
            dependencies: ["hr-manual-1"]
          },
          {
            activityId: "hr-manual-3",
            areaTitle: "Review HR Manual",
            activity: "Finalise manual and train staff",
            cfMapping: {
              principleId: 4,
              principleName: "Effectively Run Organisation"
            },
            startDate: "2025-07",
            endDate: "2025-08",
            timeframeOriginal: "July-August 2025",
            timeframeStandardized: {
              type: "range",
              startQuarter: "Q2 2025-26",
              endQuarter: "Q2 2025-26"
            },
            milestone: "4 months final document",
            milestoneDate: "2025-08-31",
            status: "Not Started",
            statusPercentage: 0,
            leadPerson: "HR Director",
            dependencies: ["hr-manual-2"]
          }
        ]
      },
      
      // Raw text excerpts from GIP
      gipExcerpts: [
        {
          areaTitle: "Organisational Strategy Development",
          text: "Formulate the Strategy Team (include board members, executives, and department heads)",
          cfMapping: {
            principleId: 3,
            elementId: "3.1"
          },
          section: "Steps needed to undertake Improvement",
          confidence: 0.95
        },
        {
          areaTitle: "Organisational Strategy Development",
          text: "Conduct a SWOT analysis to identify strengths, weaknesses, opportunities, and threats",
          cfMapping: {
            principleId: 3,
            elementId: "3.1"
          },
          section: "Steps needed to undertake Improvement",
          confidence: 0.95
        },
        {
          areaTitle: "Organisational Strategy Development",
          text: "Strategy consultant for initial stages",
          cfMapping: {
            principleId: 3,
            elementId: "3.1"
          },
          section: "Additional Support/Reference Required",
          confidence: 0.90
        },
        {
          areaTitle: "Review governing document",
          text: "Set up sub-group(SG) with Terms of Reference and appoint 3 people",
          cfMapping: {
            principleId: 1,
            elementId: "1.1"
          },
          section: "Steps needed to undertake Improvement",
          confidence: 0.92
        },
        {
          areaTitle: "Review governing document",
          text: "2 initial hours support from consultant/legal",
          cfMapping: {
            principleId: 1,
            elementId: "1.1"
          },
          section: "Additional Support/Reference Required",
          confidence: 0.88
        },
        {
          areaTitle: "Review HR Manual",
          text: "Access to HR expertise/company for some sections and final check of whole",
          cfMapping: {
            principleId: 4,
            elementId: "4.8"
          },
          section: "Additional Support/Reference Required",
          confidence: 0.85
        }
      ]
    },
  
    "badminton-wales": {
      id: "badminton-wales",
      name: "Badminton Wales'",
      documentDate: "2025-01-25",
      
      frameworkAlignment: [
        {
          principleId: 2,
          principleName: "People and Cultures",
          focusAreaCount: 1,
          elements: ["2.3 Directors Recruitment/Appointment", "2.5 Board/Committee Terms of Office & Composition"],
          implementationStatus: "Not Started",
          completionPercentage: 0,
          gipExcerpts: ["Review and refresh the organisations board composition", "Achieve gender parity of 60/40"]
        },
        {
          principleId: 3,
          principleName: "Insight, Engagement & Strategy",
          focusAreaCount: 1,
          elements: ["3.3 EDI (Equality, Diversity & Inclusion)"],
          implementationStatus: "Not Started",
          completionPercentage: 0,
          gipExcerpts: ["Transgender policy to be created"]
        },
        {
          principleId: 4,
          principleName: "Effectively Run Organisation",
          focusAreaCount: 1,
          elements: ["4.1 Effective Meetings"],
          implementationStatus: "Not Started",
          completionPercentage: 0,
          gipExcerpts: ["Board meetings to become more effective"]
        },
        {
          principleId: 1,
          principleName: "Organisational/Legal Compliance",
          focusAreaCount: 1,
          elements: ["1.2 Safeguarding Children and Adults"],
          implementationStatus: "Not Started",
          completionPercentage: 0,
          gipExcerpts: ["Achieve Level 2 Safeguarding"]
        }
      ],
      
      developmentAreas: [
        {
          areaId: "board-composition",
          areaTitle: "Review and refresh the organisations board composition",
          cfMapping: {
            principleId: 2,
            principleName: "People and Cultures",
            elementId: "2.3",
            elementName: "Directors Recruitment/Appointment"
          },
          secondaryCfMapping: {
            principleId: 2,
            elementId: "2.5",
            elementName: "Board/Committee Terms of Office & Composition"
          },
          objective: "Align and achieve Sport Wales' target of a gender parity of 60/40, Conduct skills audit, Review Articles",
          actions: [
            "Align and achieve Sport Wales' target of a gender parity of 60/40",
            "Conduct skills audit to ensure board is skilled, balance and diverse",
            "Review Articles to ensure recruitment and terms of board director are fit for purpose."
          ],
          progressStatus: "Not Started",
          progressDetails: "",
          timeframe: "July 2025",
          leadPerson: "Chair",
          startDate: "2025-02",
          endDate: "2025-07"
        },
        {
          areaId: "transgender-policy",
          areaTitle: "Transgender policy to be created",
          cfMapping: {
            principleId: 3,
            principleName: "Insight, Engagement & Strategy",
            elementId: "3.3",
            elementName: "EDI (Equality, Diversity & Inclusion)"
          },
          objective: "Create inclusive transgender policy",
          actions: [
            "All board and executive to engage and attend Guidance workshops",
            "Consultation with members",
            "Policy creation",
            "Policy approval",
            "Policy outstretch"
          ],
          progressStatus: "Not Started",
          progressDetails: "",
          timeframe: "February 2026",
          leadPerson: "EDI manager",
          startDate: "2025-05",
          endDate: "2026-02"
        },
        {
          areaId: "board-meetings",
          areaTitle: "Board meetings to become more effective",
          cfMapping: {
            principleId: 4,
            principleName: "Effectively Run Organisation",
            elementId: "4.1",
            elementName: "Effective Meetings"
          },
          objective: "Improve board meeting effectiveness",
          actions: [
            "Agenda format to be reviewed and revised",
            "Board directors to complete survey feedback",
            "Reflective away day for board"
          ],
          progressStatus: "Not Started",
          progressDetails: "",
          timeframe: "September 2025",
          leadPerson: "Chair",
          startDate: "2025-03",
          endDate: "2025-09"
        },
        {
          areaId: "safeguarding-level-2",
          areaTitle: "Achieve Level 2 Safeguarding",
          cfMapping: {
            principleId: 1,
            principleName: "Organisational/Legal Compliance",
            elementId: "1.2",
            elementName: "Safeguarding Children and Adults"
          },
          objective: "Achieve Level 2 Safeguarding certification",
          actions: [
            "Engage with CPSU to create action plan",
            "Outstretch action plan",
            "Attend panel assessment"
          ],
          progressStatus: "Not Started",
          progressDetails: "",
          timeframe: "March 2025",
          leadPerson: "Safeguarding lead",
          startDate: "2025-01",
          endDate: "2025-03"
        }
      ],
      
      supportRequests: [
        {
          requestId: "board-engagement",
          supportArea: "Board engagement",
          cfMapping: {
            principleId: 2,
            elementId: "2.3",
            elementName: "Directors Recruitment/Appointment"
          },
          requestedTimeline: "2025-03",
          context: "Board directors need to be engaged",
          status: "Requested",
          developmentArea: "Review and refresh the organisations board composition",
          gipExcerpt: "Board directors need to be engaged"
        },
        {
          requestId: "ceo-facilitation",
          supportArea: "CEO facilitation",
          cfMapping: {
            principleId: 2,
            elementId: "2.3",
            elementName: "Directors Recruitment/Appointment"
          },
          requestedTimeline: "2025-04",
          context: "CEO to facilitate",
          status: "Requested",
          developmentArea: "Review and refresh the organisations board composition",
          gipExcerpt: "CEO to facilitate"
        },
        {
          requestId: "transgender-comms-support",
          supportArea: "Communications support",
          cfMapping: {
            principleId: 3,
            elementId: "3.3",
            elementName: "EDI (Equality, Diversity & Inclusion)"
          },
          requestedTimeline: "2025-08",
          context: "Comms support from Sport Wales",
          status: "Requested",
          developmentArea: "Transgender policy to be created",
          gipExcerpt: "Comms support from Sport Wales"
        },
        {
          requestId: "transgender-legal-advice",
          supportArea: "Legal advice",
          cfMapping: {
            principleId: 3,
            elementId: "3.3",
            elementName: "EDI (Equality, Diversity & Inclusion)"
          },
          requestedTimeline: "2025-10",
          context: "Legal advice needed",
          status: "Requested",
          developmentArea: "Transgender policy to be created",
          gipExcerpt: "Legal advice needed"
        },
        {
          requestId: "safeguarding-cpsu-act",
          supportArea: "CPSU/ACT support",
          cfMapping: {
            principleId: 1,
            elementId: "1.2",
            elementName: "Safeguarding Children and Adults"
          },
          requestedTimeline: "2025-02",
          context: "CPSU/ACT support for safeguarding assessment",
          status: "Requested",
          developmentArea: "Achieve Level 2 Safeguarding",
          gipExcerpt: "CPSU/ACT"
        }
      ],
      
      implementationTimeline: {
        timelinePeriod: "2025-01-01 to 2026-02-28",
        activities: [
          {
            activityId: "board-comp-1",
            areaTitle: "Review and refresh the organisations board composition",
            activity: "Board engagement and skills audit",
            cfMapping: {
              principleId: 2,
              principleName: "People and Cultures"
            },
            startDate: "2025-02",
            endDate: "2025-04",
            timeframeOriginal: "February-April 2025",
            timeframeStandardized: {
              type: "range",
              startQuarter: "Q4 2024-25",
              endQuarter: "Q1 2025-26"
            },
            milestone: "Board to engage in skills audit by 2 months",
            milestoneDate: "2025-04-30",
            status: "Not Started",
            statusPercentage: 0,
            leadPerson: "Chair",
            dependencies: []
          },
          {
            activityId: "board-comp-2",
            areaTitle: "Review and refresh the organisations board composition",
            activity: "Review Articles and implement changes",
            cfMapping: {
              principleId: 2,
              principleName: "People and Cultures"
            },
            startDate: "2025-05",
            endDate: "2025-07",
            timeframeOriginal: "May-July 2025",
            timeframeStandardized: {
              type: "range",
              startQuarter: "Q1 2025-26",
              endQuarter: "Q2 2025-26"
            },
            milestone: "Articles to be review by July",
            milestoneDate: "2025-07-31",
            status: "Not Started",
            statusPercentage: 0,
            leadPerson: "Chair",
            dependencies: ["board-comp-1"]
          },
          {
            activityId: "transgender-1",
            areaTitle: "Transgender policy to be created",
            activity: "Workshops and consultation",
            cfMapping: {
              principleId: 3,
              principleName: "Insight, Engagement & Strategy"
            },
            startDate: "2025-05",
            endDate: "2025-09",
            timeframeOriginal: "May-September 2025",
            timeframeStandardized: {
              type: "range",
              startQuarter: "Q1 2025-26",
              endQuarter: "Q2 2025-26"
            },
            milestone: "Training to be complete by Sept 2025",
            milestoneDate: "2025-09-30",
            status: "Not Started",
            statusPercentage: 0,
            leadPerson: "EDI manager",
            dependencies: []
          },
          {
            activityId: "transgender-2",
            areaTitle: "Transgender policy to be created",
            activity: "Policy creation and approval",
            cfMapping: {
              principleId: 3,
              principleName: "Insight, Engagement & Strategy"
            },
            startDate: "2025-09",
            endDate: "2025-12",
            timeframeOriginal: "September-December 2025",
            timeframeStandardized: {
              type: "range",
              startQuarter: "Q2 2025-26",
              endQuarter: "Q3 2025-26"
            },
            milestone: "Consultation complete pre World Championship",
            milestoneDate: "2025-10-15",
            status: "Not Started",
            statusPercentage: 0,
            leadPerson: "EDI manager",
            dependencies: ["transgender-1"]
          },
          {
            activityId: "transgender-3",
            areaTitle: "Transgender policy to be created",
            activity: "Policy finalization and outstretch",
            cfMapping: {
              principleId: 3,
              principleName: "Insight, Engagement & Strategy"
            },
            startDate: "2025-12",
            endDate: "2026-02",
            timeframeOriginal: "December 2025-February 2026",
            timeframeStandardized: {
              type: "range",
              startQuarter: "Q3 2025-26",
              endQuarter: "Q4 2025-26"
            },
            milestone: "Policy to be taken to Dec board",
         milestoneDate: "2025-12-15",
         status: "Not Started",
         statusPercentage: 0,
         leadPerson: "EDI manager",
         dependencies: ["transgender-2"]
       },
       {
         activityId: "board-meetings-1",
         areaTitle: "Board meetings to become more effective",
         activity: "Review agenda format and gather feedback",
         cfMapping: {
           principleId: 4,
           principleName: "Effectively Run Organisation"
         },
         startDate: "2025-03",
         endDate: "2025-06",
         timeframeOriginal: "March-June 2025",
         timeframeStandardized: {
           type: "range",
           startQuarter: "Q4 2024-25",
           endQuarter: "Q1 2025-26"
         },
         milestone: "Surveys to be complete by June 2025",
         milestoneDate: "2025-06-30",
         status: "Not Started",
         statusPercentage: 0,
         leadPerson: "Chair",
         dependencies: []
       },
       {
         activityId: "board-meetings-2",
         areaTitle: "Board meetings to become more effective",
         activity: "Conduct board away day and implement changes",
         cfMapping: {
           principleId: 4,
           principleName: "Effectively Run Organisation"
         },
         startDate: "2025-06",
         endDate: "2025-09",
         timeframeOriginal: "June-September 2025",
         timeframeStandardized: {
           type: "range",
           startQuarter: "Q1 2025-26",
           endQuarter: "Q2 2025-26"
         },
         milestone: "Away day to take place late Summer",
         milestoneDate: "2025-08-15",
         status: "Not Started",
         statusPercentage: 0,
         leadPerson: "Chair",
         dependencies: ["board-meetings-1"]
       },
       {
         activityId: "safeguarding-1",
         areaTitle: "Achieve Level 2 Safeguarding",
         activity: "Engage with CPSU and create action plan",
         cfMapping: {
           principleId: 1,
           principleName: "Organisational/Legal Compliance"
         },
         startDate: "2025-01",
         endDate: "2025-02",
         timeframeOriginal: "January-February 2025",
         timeframeStandardized: {
           type: "range",
           startQuarter: "Q4 2024-25",
           endQuarter: "Q4 2024-25"
         },
         milestone: "",
         milestoneDate: "",
         status: "Not Started",
         statusPercentage: 0,
         leadPerson: "Safeguarding lead",
         dependencies: []
       },
       {
         activityId: "safeguarding-2",
         areaTitle: "Achieve Level 2 Safeguarding",
         activity: "Implement action plan and prepare for assessment",
         cfMapping: {
           principleId: 1,
           principleName: "Organisational/Legal Compliance"
         },
         startDate: "2025-02",
         endDate: "2025-03",
         timeframeOriginal: "February-March 2025",
         timeframeStandardized: {
           type: "range",
           startQuarter: "Q4 2024-25",
           endQuarter: "Q4 2024-25"
         },
         milestone: "Panel to take place in Feb 2026",
         milestoneDate: "2026-02-15",
         status: "Not Started",
         statusPercentage: 0,
         leadPerson: "Safeguarding lead",
         dependencies: ["safeguarding-1"]
       }
     ]
   },
   
   gipExcerpts: [
     {
       areaTitle: "Review and refresh the organisations board composition",
       text: "Align and achieve Sport Wales' target of a gender parity of 60/40",
       cfMapping: {
         principleId: 2,
         elementId: "2.3"
       },
       section: "Key objective/Actions",
       confidence: 0.94
     },
     {
       areaTitle: "Review and refresh the organisations board composition",
       text: "Conduct skills audit to ensure board is skilled, balance and diverse",
       cfMapping: {
         principleId: 2,
         elementId: "2.3"
       },
       section: "Key objective/Actions",
       confidence: 0.92
     },
     {
       areaTitle: "Transgender policy to be created",
       text: "All board and executive to engage and attend Guidance workshops",
       cfMapping: {
         principleId: 3,
         elementId: "3.3"
       },
       section: "Key objective/Actions",
       confidence: 0.90
     },
     {
       areaTitle: "Transgender policy to be created",
       text: "Comms support from Sport Wales",
       cfMapping: {
         principleId: 3,
         elementId: "3.3"
       },
       section: "Additional Support/Reference Required",
       confidence: 0.85
     },
     {
       areaTitle: "Board meetings to become more effective",
       text: "Board directors to complete survey feedback",
       cfMapping: {
         principleId: 4,
         elementId: "4.1"
       },
       section: "Key objective/Actions",
       confidence: 0.88
     },
     {
       areaTitle: "Achieve Level 2 Safeguarding",
       text: "Engage with CPSU to create action plan",
       cfMapping: {
         principleId: 1,
         elementId: "1.2"
       },
       section: "Key objective/Actions",
       confidence: 0.95
     }
   ]
 },

 "basketball-wales": {
   id: "basketball-wales",
   name: "Basketball Wales",
   documentDate: "2025-01-25",
   
   frameworkAlignment: [
     {
       principleId: 2,
       principleName: "People and Cultures",
       focusAreaCount: 1,
       elements: ["2.12 Director Succession Planning"],
       implementationStatus: "Not Started",
       completionPercentage: 0,
       gipExcerpts: ["Review roles and responsibility of board members and their remits", "Develop recruitment plan for key roles and skills needed"]
     },
     {
       principleId: 1,
       principleName: "Organisational/Legal Compliance",
       focusAreaCount: 1,
       elements: ["1.2 Safeguarding Children and Adults"],
       implementationStatus: "In Progress",
       completionPercentage: 15,
       gipExcerpts: ["Maintain level 1 safeguarding by engaging with the CPSU"]
     },
     {
       principleId: 1,
       principleName: "Organisational/Legal Compliance",
       focusAreaCount: 1,
       elements: ["1.1 to 1.9 Multiple Elements"],
       implementationStatus: "In Progress",
       completionPercentage: 10,
       gipExcerpts: ["Familiarise the board and organisation with the new capability framework", "Assess ourselves against the various areas and identify any gaps/areas to improve"]
     }
   ],
   
   developmentAreas: [
     {
       areaId: "succession-planning",
       areaTitle: "Succession planning",
       cfMapping: {
         principleId: 2,
         principleName: "People and Cultures",
         elementId: "2.12",
         elementName: "Director Succession Planning"
       },
       objective: "Improve succession planning for board members",
       actions: [
         "Review roles and responsibility of board members and their remits",
         "Develop recruitment plan for key roles and skills needed"
       ],
       progressStatus: "Not Started",
       progressDetails: "",
       timeframe: "End of February 2026",
       leadPerson: "CEO and board",
       startDate: "2025-03",
       endDate: "2026-02"
     },
     {
       areaId: "capability-framework",
       areaTitle: "Capability Framework requirements",
       cfMapping: {
         principleId: 1,
         principleName: "Organisational/Legal Compliance"
       },
       secondaryCfMapping: {
         principleId: 3,
         elementId: "3.1",
         elementName: "Strategic Plan"
       },
       objective: "Align with new Capability Framework requirements",
       actions: [
         "Familiarise the board and organisation with the new capability framework",
         "Assess ourselves against the various areas and identify any gaps/areas to improve",
         "Create a plan towards meeting each Core element of the new framework",
         "Seek support from Sport Wales around welsh language and environmental sustainability"
       ],
       progressStatus: "In Progress",
       progressDetails: "Board discussed and reviewed the draft framework at our January board meeting",
       timeframe: "End of financial year 25/26",
       leadPerson: "Board and Executive Leads",
       startDate: "2025-01",
       endDate: "2026-03"
     },
     {
       areaId: "safeguarding-level-1",
       areaTitle: "Safeguarding",
       cfMapping: {
         principleId: 1,
         principleName: "Organisational/Legal Compliance",
         elementId: "1.2",
         elementName: "Safeguarding Children and Adults"
       },
       objective: "Maintain level 1 safeguarding by engaging with the CPSU",
       actions: [
         "Engage with CPSU to maintain level 1 safeguarding",
         "Complete required actions from CPSU",
         "Regular safeguarding reviews"
       ],
       progressStatus: "In Progress",
       progressDetails: "In contact with CPSU. Email sent on 27/02/2025 requesting list of actions to completing level 1",
       timeframe: "July 2025",
       leadPerson: "Lead Safeguarding Officer",
       startDate: "2025-02",
       endDate: "2025-07"
     }
   ],
   
   supportRequests: [
     {
       requestId: "welsh-language-support",
       supportArea: "Welsh language support",
       cfMapping: {
         principleId: 1,
         elementId: "1.7",
         elementName: "Welsh Language"
       },
       requestedTimeline: "2025-06",
       context: "Seek support from Sport Wales around welsh language",
       status: "Requested",
       developmentArea: "Capability Framework requirements",
       gipExcerpt: "Seek support from Sport Wales around welsh language and environmental sustainability"
     },
     {
       requestId: "environmental-sustainability",
       supportArea: "Environmental sustainability guidance",
       cfMapping: {
         principleId: 1,
         elementId: "1.8",
         elementName: "Environmental Sustainability"
       },
       requestedTimeline: "2025-06",
       context: "Seek support from Sport Wales around environmental sustainability",
       status: "Requested",
       developmentArea: "Capability Framework requirements",
       gipExcerpt: "Seek support from Sport Wales around welsh language and environmental sustainability"
     },
     {
       requestId: "cpsu-safeguarding",
       supportArea: "CPSU engagement",
       cfMapping: {
         principleId: 1,
         elementId: "1.2",
         elementName: "Safeguarding Children and Adults"
       },
       requestedTimeline: "2025-03",
       context: "Support from CPSU for level 1 safeguarding",
       status: "In Progress",
       developmentArea: "Safeguarding",
       gipExcerpt: "Maintain level 1 safeguarding by engaging with the CPSU"
     }
   ],
   
   implementationTimeline: {
     timelinePeriod: "2025-01-01 to 2026-03-31",
     activities: [
       {
         activityId: "succession-1",
         areaTitle: "Succession planning",
         activity: "Review board roles and responsibilities",
         cfMapping: {
           principleId: 2,
           principleName: "People and Cultures"
         },
         startDate: "2025-03",
         endDate: "2025-08",
         timeframeOriginal: "March-August 2025",
         timeframeStandardized: {
           type: "range",
           startQuarter: "Q4 2024-25",
           endQuarter: "Q2 2025-26"
         },
         milestone: "",
         milestoneDate: "",
         status: "Not Started",
         statusPercentage: 0,
         leadPerson: "CEO and board",
         dependencies: []
       },
       {
         activityId: "succession-2",
         areaTitle: "Succession planning",
         activity: "Develop recruitment plan",
         cfMapping: {
           principleId: 2,
           principleName: "People and Cultures"
         },
         startDate: "2025-09",
         endDate: "2026-02",
         timeframeOriginal: "September 2025-February 2026",
         timeframeStandardized: {
           type: "range",
           startQuarter: "Q2 2025-26",
           endQuarter: "Q4 2025-26"
         },
         milestone: "",
         milestoneDate: "",
         status: "Not Started",
         statusPercentage: 0,
         leadPerson: "CEO and board",
         dependencies: ["succession-1"]
       },
       {
         activityId: "cf-1",
         areaTitle: "Capability Framework requirements",
         activity: "Familiarize with framework and assess against requirements",
         cfMapping: {
           principleId: 1,
           principleName: "Organisational/Legal Compliance"
         },
         startDate: "2025-01",
         endDate: "2025-04",
         timeframeOriginal: "January-April 2025",
         timeframeStandardized: {
           type: "range",
           startQuarter: "Q4 2024-25",
           endQuarter: "Q1 2025-26"
         },
         milestone: "",
         milestoneDate: "",
         status: "In Progress",
         statusPercentage: 25,
         leadPerson: "Board and Executive Leads",
         dependencies: []
       },
       {
         activityId: "cf-2",
         areaTitle: "Capability Framework requirements",
         activity: "Create implementation plan and seek support",
         cfMapping: {
           principleId: 1,
           principleName: "Organisational/Legal Compliance"
         },
         startDate: "2025-05",
         endDate: "2025-09",
         timeframeOriginal: "May-September 2025",
         timeframeStandardized: {
           type: "range",
           startQuarter: "Q1 2025-26",
           endQuarter: "Q2 2025-26"
         },
         milestone: "",
         milestoneDate: "",
         status: "Not Started",
         statusPercentage: 0,
         leadPerson: "Board and Executive Leads",
         dependencies: ["cf-1"]
       },
       {
         activityId: "cf-3",
         areaTitle: "Capability Framework requirements",
         activity: "Implementation of core elements",
         cfMapping: {
           principleId: 1,
           principleName: "Organisational/Legal Compliance"
         },
         startDate: "2025-10",
         endDate: "2026-03",
         timeframeOriginal: "October 2025-March 2026",
         timeframeStandardized: {
           type: "range",
           startQuarter: "Q3 2025-26",
           endQuarter: "Q4 2025-26"
         },
         milestone: "End of financial year 25/26",
         milestoneDate: "2026-03-31",
         status: "Not Started",
         statusPercentage: 0,
         leadPerson: "Board and Executive Leads",
         dependencies: ["cf-2"]
       },
       {
         activityId: "safeguarding-1",
         areaTitle: "Safeguarding",
         activity: "CPSU engagement and requirement identification",
         cfMapping: {
           principleId: 1,
           principleName: "Organisational/Legal Compliance"
         },
         startDate: "2025-02",
         endDate: "2025-04",
         timeframeOriginal: "February-April 2025",
         timeframeStandardized: {
           type: "range",
           startQuarter: "Q4 2024-25",
           endQuarter: "Q1 2025-26"
         },
         milestone: "",
         milestoneDate: "",
         status: "In Progress",
         statusPercentage: 30,
         leadPerson: "Lead Safeguarding Officer",
         dependencies: []
       },
       {
         activityId: "safeguarding-2",
         areaTitle: "Safeguarding",
         activity: "Implementation of CPSU requirements",
         cfMapping: {
           principleId: 1,
           principleName: "Organisational/Legal Compliance"
         },
         startDate: "2025-04",
         endDate: "2025-07",
         timeframeOriginal: "April-July 2025",
         timeframeStandardized: {
           type: "range",
           startQuarter: "Q1 2025-26",
           endQuarter: "Q2 2025-26"
         },
         milestone: "July 2025",
         milestoneDate: "2025-07-31",
         status: "Not Started",
         statusPercentage: 0,
         leadPerson: "Lead Safeguarding Officer",
         dependencies: ["safeguarding-1"]
       }
     ]
   },
   
   gipExcerpts: [
     {
       areaTitle: "Succession planning",
       text: "Review roles and responsibility of board members and their remits",
       cfMapping: {
         principleId: 2,
         elementId: "2.12"
       },
       section: "Key objective/Actions",
       confidence: 0.92
     },
     {
       areaTitle: "Succession planning",
       text: "Develop recruitment plan for key roles and skills needed",
       cfMapping: {
         principleId: 2,
         elementId: "2.12"
       },
       section: "Key objective/Actions",
       confidence: 0.90
     },
     {
       areaTitle: "Capability Framework requirements",
       text: "Familiarise the board and organisation with the new capability framework",
       cfMapping: {
         principleId: 1,
         elementId: "1.1"
       },
       section: "Key objective/Actions",
       confidence: 0.85
     },
     {
       areaTitle: "Capability Framework requirements",
       text: "Seek support from Sport Wales around welsh language and environmental sustainability",
       cfMapping: {
         principleId: 1,
         elementId: "1.7"
       },
       secondaryCfMapping: {
         principleId: 1,
         elementId: "1.8"
       },
       section: "Key objective/Actions",
       confidence: 0.88
     },
     {
       areaTitle: "Safeguarding",
       text: "Maintain level 1 safeguarding by engaging with the CPSU",
       cfMapping: {
         principleId: 1,
         elementId: "1.2"
       },
       section: "Key objective/Actions",
       confidence: 0.95
     },
     {
       areaTitle: "Safeguarding",
       text: "In contact with CPSU. Email sent on 27/02/2025 requesting list of actions to completing level 1",
       cfMapping: {
         principleId: 1,
         elementId: "1.2"
       },
       section: "Progress made",
       confidence: 0.93
     }
   ]
 },

 "bowls-wales": {
   id: "bowls-wales",
   name: "Bowls Wales",
   documentDate: "2025-01-18",
   
   frameworkAlignment: [
     {
       principleId: 3,
       principleName: "Insight, Engagement & Strategy",
       focusAreaCount: 2,
       elements: ["3.3 EDI (Equality, Diversity & Inclusion)", "3.1 Strategic Plan"],
       implementationStatus: "In Progress",
       completionPercentage: 15,
       gipExcerpts: ["EDI -- Moving to Inclusion", "Strategy review"]
     },
     {
       principleId: 1,
       principleName: "Organisational/Legal Compliance",
       focusAreaCount: 2,
       elements: ["1.2 Safeguarding Children and Adults", "1.6 Clean Sport / Anti-Doping"],
       implementationStatus: "In Progress",
       completionPercentage: 10,
       gipExcerpts: ["Achieve level 3 safeguarding in line with Sport Wales requirements", "Maintain compliance"]
     },
     {
       principleId: 4,
       principleName: "Effectively Run Organisation",
       focusAreaCount: 1,
       elements: ["4.8 Policies and Procedures (Non-Legal)"],
       implementationStatus: "Not Started",
       completionPercentage: 0,
       gipExcerpts: ["Policy reviews", "Complaints & whistleblowing policy to be reviewed and updated"]
     }
   ],
   
   developmentAreas: [
     {
       areaId: "edi-inclusion",
       areaTitle: "EDI -- Moving to Inclusion",
       cfMapping: {
         principleId: 3,
         principleName: "Insight, Engagement & Strategy",
         elementId: "3.3",
         elementName: "EDI (Equality, Diversity & Inclusion)"
       },
       objective: "Develop equality, diversity and inclusion awareness and practices within SPORTY",
       actions: [
         "Complete the M2iF diagnostic tool via the M2iF website",
         "Engage with a M2iF mentor",
         "Reflect with and implement recommendations from the framework to develop EDI in all five pillars"
       ],
       progressStatus: "In Progress",
       progressDetails: "Mentor has been assigned to our organisation. Induction meeting completed on 21/02/2025",
       timeframe: "End of February 2026",
       leadPerson: "EDI Working group / EDI Lead",
       startDate: "2025-01",
       endDate: "2026-02"
     },
     {
       areaId: "strategy-review",
       areaTitle: "Strategy review",
       cfMapping: {
         principleId: 3,
         principleName: "Insight, Engagement & Strategy",
         elementId: "3.1",
         elementName: "Strategic Plan"
       },
       objective: "Develop a comprehensive, insight led strategy for SPORTY",
       actions: [
         "Review and redefine the mission and vision of SPORTY",
         "Gather insight and data to inform the goals of the organisation through consultation",
         "Develop the strategy and share with members for further feedback",
         "Implementation of the strategy -- communicate and allocate resources",
         "Monitoring and evaluation of effectiveness and impact of the strategy"
       ],
       progressStatus: "In Progress",
       progressDetails: "Initial planning phase in process to review the mission and vision of the organisation",
       timeframe: "Summer 2026",
       leadPerson: "Board and Executive Leads",
       startDate: "2025-01",
       endDate: "2026-08"
     },
     {
       areaId: "safeguarding-level-3",
       areaTitle: "Safeguarding",
       cfMapping: {
         principleId: 1,
         principleName: "Organisational/Legal Compliance",
         elementId: "1.2",
         elementName: "Safeguarding Children and Adults"
       },
       objective: "Achieve level 3 safeguarding in line with Sport Wales requirements",
       actions: [
         "Develop and embed recommendations from the safeguarding panel assessment in November 2024",
         "Recruit new Deputy Safeguarding Officer (DSO) to support with capacity and required actions",
         "Seek to appoint a young person to challenge safeguarding practices",
         "Return to safeguarding panel re-assessment in autumn 2025"
       ],
       progressStatus: "In Progress",
       progressDetails: "Deputy Safeguarding Officer post being advertised. Lead Safeguarding Officer implementing some of the panel assessment actions",
       timeframe: "Autumn/Winter 2025",
       leadPerson: "Lead Safeguarding Officer and board for awareness",
       startDate: "2025-02",
       endDate: "2025-12"
     },
     {
       areaId: "policy-reviews",
       areaTitle: "Policy reviews",
       cfMapping: {
         principleId: 4,
         principleName: "Effectively Run Organisation",
         elementId: "4.8",
         elementName: "Policies and Procedures (Non-Legal)"
       },
       objective: "Several policies in need of review",
       actions: [
         "Complaints & whistleblowing policy to be reviewed and updated following numerous complaints and a faulty process identified",
         "Recruitment & procurement policies scheduled for review",
         "EDI policy"
       ],
       progressStatus: "Not Started",
       progressDetails: "Not yet started",
       timeframe: "",
       leadPerson: "Board",
       startDate: "2025-04",
       endDate: "2025-10"
     },
     {
       areaId: "ukad-compliance",
       areaTitle: "UKAD",
       cfMapping: {
         principleId: 1,
         principleName: "Organisational/Legal Compliance",
         elementId: "1.6",
         elementName: "Clean Sport / Anti-Doping"
       },
       objective: "Maintain compliance",
       actions: [
         "Submit annual requirements and reports to UKAD and engage with the British governing body",
         "Complete anti-doping training"
       ],
       progressStatus: "In Progress",
       progressDetails: "Letter received from UKAD detailing requirements for 25/26",
       timeframe: "March 2026",
       leadPerson: "Governance Manager",
       startDate: "2025-03",
       endDate: "2026-03"
     }
   ],
   
   supportRequests: [
     {
       requestId: "m2if-support",
       supportArea: "M2iF diagnostic tool support",
       cfMapping: {
         principleId: 3,
         elementId: "3.3",
         elementName: "EDI (Equality, Diversity & Inclusion)"
       },
       requestedTimeline: "2025-03",
       context: "Support to complete the M2iF diagnostic tool",
       status: "Requested",
       developmentArea: "EDI -- Moving to Inclusion",
       gipExcerpt: "Complete the M2iF diagnostic tool via the M2iF website"
     },
     {
       requestId: "strategy-development",
       supportArea: "Strategy development assistance",
       cfMapping: {
         principleId: 3,
         elementId: "3.1",
         elementName: "Strategic Plan"
       },
       requestedTimeline: "2025-05",
       context: "Support with strategy development process",
       status: "Requested",
       developmentArea: "Strategy review",
       gipExcerpt: "Develop the strategy and share with members for further feedback"
     },
     {
       requestId: "safeguarding-panel",
       supportArea: "Safeguarding panel assessment",
       cfMapping: {
         principleId: 1,
         elementId: "1.2",
         elementName: "Safeguarding Children and Adults"
       },
       requestedTimeline: "2025-10",
       context: "Support with safeguarding panel re-assessment",
       status: "Requested",
       developmentArea: "Safeguarding",
       gipExcerpt: "Return to safeguarding panel re-assessment in autumn 2025"
     },
     {
       requestId: "youth-rep-safeguarding",
       supportArea: "Youth representation",
       cfMapping: {
         principleId: 1,
         elementId: "1.2",
         elementName: "Safeguarding Children and Adults"
       },
       requestedTimeline: "2025-06",
       context: "Support appointing a young person to challenge safeguarding practices",
       status: "Requested",
       developmentArea: "Safeguarding",
       gipExcerpt: "Seek to appoint a young person to challenge safeguarding practices"
     },
     {
       requestId: "policy-review-support",
       supportArea: "Policy review assistance",
       cfMapping: {
         principleId: 4,
         elementId: "4.8",
         elementName: "Policies and Procedures (Non-Legal)"
       },
       requestedTimeline: "2025-05",
       context: "Support with policy reviews",
       status: "Requested",
       developmentArea: "Policy reviews",
       gipExcerpt: "Complaints & whistleblowing policy to be reviewed and updated"
     }
   ],
   
   implementationTimeline: {
     timelinePeriod: "2025-01-01 to 2026-08-31",
     activities: [
       {
         activityId: "edi-1",
         areaTitle: "EDI -- Moving to Inclusion",
         activity: "M2iF diagnostic tool and mentor engagement",
         cfMapping: {
           principleId: 3,
           principleName: "Insight, Engagement & Strategy"
         },
         startDate: "2025-01",
         endDate: "2025-06",
         timeframeOriginal: "January-June 2025",
         timeframeStandardized: {
           type: "range",
           startQuarter: "Q4 2024-25",
           endQuarter: "Q1 2025-26"
         },
         milestone: "",
         milestoneDate: "",
         status: "In Progress",
         statusPercentage: 30,
         leadPerson: "EDI Working group / EDI Lead",
         dependencies: []
       },
       {
         activityId: "edi-2",
         areaTitle: "EDI -- Moving to Inclusion",
         activity: "Implementation of recommendations",
         cfMapping: {
           principleId: 3,
           principleName: "Insight, Engagement & Strategy"
         },
         startDate: "2025-06",
         endDate: "2026-02",
         timeframeOriginal: "June 2025-February 2026",
         timeframeStandardized: {
           type: "range",
           startQuarter: "Q1 2025-26",
           endQuarter: "Q4 2025-26"
         },
         milestone: "End of February 2026",
         milestoneDate: "2026-02-28",
         status: "Not Started",
         statusPercentage: 0,
         leadPerson: "EDI Working group / EDI Lead",
         dependencies: ["edi-1"]
       },
       {
         activityId: "strategy-1",
         areaTitle: "Strategy review",
         activity: "Review mission/vision and gather insight",
         cfMapping: {
           principleId: 3,
           principleName: "Insight, Engagement & Strategy"
         },
         startDate: "2025-01",
         endDate: "2025-09",
         timeframeOriginal: "January-September 2025",
         timeframeStandardized: {
           type: "range",
           startQuarter: "Q4 2024-25",
           endQuarter: "Q2 2025-26"
         },
         milestone: "",
         milestoneDate: "",
         status: "In Progress",
         statusPercentage: 20,
         leadPerson: "Board and Executive Leads",
         dependencies: []
       },
       {
         activityId: "strategy-2",
         areaTitle: "Strategy review",
         activity: "Strategy development and consultation",
         cfMapping: {
           principleId: 3,
           principleName: "Insight, Engagement & Strategy"
         },
         startDate: "2025-09",
         endDate: "2026-03",
         timeframeOriginal: "September 2025-March 2026",
         timeframeStandardized: {
           type: "range",
           startQuarter: "Q2 2025-26",
           endQuarter: "Q4 2025-26"
         },
         milestone: "",
         milestoneDate: "",
         status: "Not Started",
         statusPercentage: 0,
         leadPerson: "Board and Executive Leads",
         dependencies: ["strategy-1"]
       },
       {
         activityId: "strategy-3",
         areaTitle: "Strategy review",
         activity: "Implementation and evaluation",
         cfMapping: {
           principleId: 3,
           principleName: "Insight, Engagement & Strategy"
         },
         startDate: "2026-03",
         endDate: "2026-08",
         timeframeOriginal: "March-August 2026",
         timeframeStandardized: {
           type: "range",
           startQuarter: "Q4 2025-26",
           endQuarter: "Q1 2026-27"
         },
         milestone: "Summer 2026",
         milestoneDate: "2026-08-31",
         status: "Not Started",
         statusPercentage: 0,
         leadPerson: "Board and Executive Leads",
         dependencies: ["strategy-2"]
       },
       {
         activityId: "safeguarding-1",
         areaTitle: "Safeguarding",
         activity: "Implement panel recommendations and recruitment",
         cfMapping: {
           principleId: 1,
           principleName: "Organisational/Legal Compliance"
         },
         startDate: "2025-02",
         endDate: "2025-07",
         timeframeOriginal: "February-July 2025",
         timeframeStandardized: {
           type: "range",
           startQuarter: "Q4 2024-25",
           endQuarter: "Q2 2025-26"
         },
         milestone: "",
         milestoneDate: "",
         status: "In Progress",
         statusPercentage: 25,
         leadPerson: "Lead Safeguarding Officer",
         dependencies: []
       },
       {
         activityId: "safeguarding-2",
         areaTitle: "Safeguarding",
         activity: "Panel re-assessment preparation",
         cfMapping: {
           principleId: 1,
           principleName: "Organisational/Legal Compliance"
         },
         startDate: "2025-07",
         endDate: "2025-12",
         timeframeOriginal: "July-December 2025",
         timeframeStandardized: {
           type: "range",
           startQuarter: "Q2 2025-26",
           endQuarter: "Q3 2025-26"
         },
         milestone: "Autumn/Winter 2025",
         milestoneDate: "2025-11-30",
         status: "Not Started",
         statusPercentage: 0,
         leadPerson: "Lead Safeguarding Officer",
         dependencies: ["safeguarding-1"]
       },
       {
         activityId: "policy-1",
         areaTitle: "Policy reviews",
         activity: "Complaints & whistleblowing policy review",
         cfMapping: {
           principleId: 4,
           principleName: "Effectively Run Organisation"
         },
         startDate: "2025-04",
         endDate: "2025-07",
         timeframeOriginal: "April-July 2025",
         timeframeStandardized: {
           type: "range",
           startQuarter: "Q1 2025-26",
           endQuarter: "Q2 2025-26"
         },
         milestone: "",
         milestoneDate: "",
         status: "Not Started",
         statusPercentage: 0,
         leadPerson: "Board",
         dependencies: []
       },
       {
         activityId: "policy-2",
         areaTitle: "Policy reviews",
         activity: "Recruitment, procurement and EDI policies review",
         cfMapping: {
           principleId: 4,
           principleName: "Effectively Run Organisation"
         },
         startDate: "2025-07",
         endDate: "2025-10",
         timeframeOriginal: "July-October 2025",
         timeframeStandardized: {
           type: "range",
           startQuarter: "Q2 2025-26",
           endQuarter: "Q3 2025-26"
         },
         milestone: "",
         milestoneDate: "",
         status: "Not Started",
         statusPercentage: 0,
         leadPerson: "Board",
         dependencies: ["policy-1"]
       },
       {
         activityId: "ukad-1",
         areaTitle: "UKAD",
         activity: "Meet UKAD compliance requirements",
         cfMapping: {
           principleId: 1,
           principleName: "Organisational/Legal Compliance"
         },
         startDate: "2025-03",
         endDate: "2026-03",
         timeframeOriginal: "March 2025-March 2026",
         timeframeStandardized: {
           type: "range",
           startQuarter: "Q4 2024-25",
           endQuarter: "Q4 2025-26"
         },
         milestone: "March 2026",
         milestoneDate: "2026-03-31",
         status: "In Progress",
         statusPercentage: 10,
         leadPerson: "Governance Manager",
         dependencies: []
       }
     ]
   },
   
   gipExcerpts: [
     {
       areaTitle: "EDI -- Moving to Inclusion",
       text: "Complete the M2iF diagnostic tool via the M2iF website",
       cfMapping: {
         principleId: 3,
         elementId: "3.3"
       },
       section: "Actions to complete",
       confidence: 0.95
     },
     {
       areaTitle: "EDI -- Moving to Inclusion",
       text: "Mentor has been assigned to our organisation. Induction meeting completed on 21/02/2025",
       cfMapping: {
         principleId: 3,
         elementId: "3.3"
       },
       section: "Progress made",
       confidence: 0.92
     },
     {
       areaTitle: "Strategy review",
       text: "Develop a comprehensive, insight led strategy for SPORTY",
       cfMapping: {
         principleId: 3,
         elementId: "3.1"
       },
       section: "Objectives",
       confidence: 0.90
     },
     {
       areaTitle: "Strategy review",
       text: "Initial planning phase in process to review the mission and vision of the organisation",
       cfMapping: {
         principleId: 3,
         elementId: "3.1"
       },
       section: "Progress made",
       confidence: 0.88
     },
     {
       areaTitle: "Safeguarding",
       text: "Achieve level 3 safeguarding in line with Sport Wales requirements",
       cfMapping: {
         principleId: 1,
         elementId: "1.2"
       },
       section: "Objectives",
       confidence: 0.97
     },
     {
       areaTitle: "Safeguarding",
       text: "Recruit new Deputy Safeguarding Officer (DSO) to support with capacity and required actions",
       cfMapping: {
         principleId: 1,
         elementId: "1.2"
       },
       section: "Actions to complete",
       confidence: 0.94
     },
     {
       areaTitle: "Policy reviews",
       text: "Complaints & whistleblowing policy to be reviewed and updated following numerous complaints and a faulty process identified",
       cfMapping: {
         principleId: 4,
         elementId: "4.8"
       },
       section: "Actions to complete",
       confidence: 0.91
     },
     {
       areaTitle: "UKAD",
       text: "Letter received from UKAD detailing requirements for 25/26",
       cfMapping: {
         principleId: 1,
         elementId: "1.6"
       },
       section: "Progress made",
       confidence: 0.89
     }
   ]
 },
 "canoe-wales": {
  // Basic partner information
  id: "canoe-wales",
  name: "Canoe Wales",
  documentDate: "2025-01-22",
  
  // Framework alignment summary
  frameworkAlignment: [
    {
      principleId: 3,
      principleName: "Insight, Engagement & Strategy",
      focusAreaCount: 2,
      elements: ["3.1 Strategic Plan", "3.3 EDI (Equality, Diversity & Inclusion)"],
      implementationStatus: "In Progress",
      completionPercentage: 20,
      gipExcerpts: ["Development of a comprehensive new strategy for 2025-2029", "Implement recommendations from the EDI audit"]
    },
    {
      principleId: 1,
      principleName: "Organisational/Legal Compliance",
      focusAreaCount: 2,
      elements: ["1.2 Safeguarding Children and Adults", "1.7 Welsh Language"],
      implementationStatus: "In Progress",
      completionPercentage: 35,
      gipExcerpts: ["Maintain safeguarding standards and seek level 3 accreditation", "Develop our Welsh Language offering"]
    },
    {
      principleId: 2,
      principleName: "People and Cultures",
      focusAreaCount: 1,
      elements: ["2.10 Key Volunteer Management Including Succession Planning"],
      implementationStatus: "Not Started",
      completionPercentage: 0,
      gipExcerpts: ["Create volunteer development and succession plan", "Improve volunteer recruitment and retention"]
    }
  ],
  
  // Detailed improvement areas from GIP
  developmentAreas: [
    {
      areaId: "strategic-plan-2025-2029",
      areaTitle: "Strategic Plan Development",
      cfMapping: {
        principleId: 3,
        principleName: "Insight, Engagement & Strategy",
        elementId: "3.1",
        elementName: "Strategic Plan"
      },
      objective: "Development of a comprehensive new strategy for 2025-2029",
      actions: [
        "Establish a strategy working group with board, staff, and member representation",
        "Review previous strategy and identify successes and areas for improvement",
        "Conduct stakeholder consultation with clubs, members, and partners",
        "Develop draft strategic priorities and KPIs",
        "Present draft strategy to board for feedback",
        "Finalise and launch the new strategy"
      ],
      progressStatus: "In Progress",
      progressDetails: "Working group has been established and initial review of previous strategy completed",
      timeframe: "October 2025",
      leadPerson: "CEO and Board Chair",
      startDate: "2025-01",
      endDate: "2025-10"
    },
    {
      areaId: "edi-implementation",
      areaTitle: "EDI Implementation",
      cfMapping: {
        principleId: 3,
        principleName: "Insight, Engagement & Strategy",
        elementId: "3.3",
        elementName: "EDI (Equality, Diversity & Inclusion)"
      },
      objective: "Implement recommendations from the EDI audit",
      actions: [
        "Review the findings from the 2024 EDI audit",
        "Prioritise actions into short, medium, and long-term objectives",
        "Develop EDI action plan with clear ownership and timelines",
        "Create monitoring framework to track progress",
        "Provide EDI training for all staff and board members",
        "Report quarterly on EDI progress to the board"
      ],
      progressStatus: "In Progress",
      progressDetails: "Initial prioritisation of actions complete, action plan in development",
      timeframe: "Ongoing through 2025-26",
      leadPerson: "EDI Lead and CEO",
      startDate: "2025-02",
      endDate: "2026-03"
    },
    {
      areaId: "safeguarding-level-3",
      areaTitle: "Safeguarding Enhancement",
      cfMapping: {
        principleId: 1,
        principleName: "Organisational/Legal Compliance",
        elementId: "1.2",
        elementName: "Safeguarding Children and Adults"
      },
      objective: "Maintain safeguarding standards and seek level 3 accreditation",
      actions: [
        "Review and update all safeguarding policies and procedures",
        "Provide advanced training for all safeguarding leads and officers",
        "Enhance club support for safeguarding implementation",
        "Conduct audit of safeguarding practices across the organisation",
        "Address any identified gaps ahead of level 3 assessment",
        "Apply for level 3 safeguarding accreditation"
      ],
      progressStatus: "In Progress",
      progressDetails: "Policy review underway, training schedule developed for club safeguarding officers",
      timeframe: "December 2025",
      leadPerson: "Safeguarding Lead",
      startDate: "2025-01",
      endDate: "2025-12"
    },
    {
      areaId: "welsh-language-enhancement",
      areaTitle: "Welsh Language Development",
      cfMapping: {
        principleId: 1,
        principleName: "Organisational/Legal Compliance",
        elementId: "1.7",
        elementName: "Welsh Language"
      },
      objective: "Develop our Welsh Language offering",
      actions: [
        "Review current Welsh language provision across all activities and communications",
        "Identify priority areas for Welsh language enhancement",
        "Develop a Welsh language action plan",
        "Provide Welsh language training opportunities for staff",
        "Create bilingual resources for key programmes and initiatives",
        "Update website to enhance Welsh language accessibility"
      ],
      progressStatus: "In Progress",
      progressDetails: "Review complete, action plan drafted",
      timeframe: "March 2026",
      leadPerson: "Communications Manager",
      startDate: "2025-03",
      endDate: "2026-03"
    },
    {
      areaId: "volunteer-management",
      areaTitle: "Volunteer Development and Succession",
      cfMapping: {
        principleId: 2,
        principleName: "People and Cultures",
        elementId: "2.10",
        elementName: "Key Volunteer Management Including Succession Planning"
      },
      objective: "Create volunteer development and succession plan",
      actions: [
        "Map current volunteer roles and identify critical positions",
        "Develop role descriptions for all volunteer positions",
        "Create succession planning templates for clubs and committees",
        "Establish a volunteer recognition programme",
        "Implement a volunteer recruitment campaign",
        "Develop training pathway for volunteers"
      ],
      progressStatus: "Not Started",
      progressDetails: "",
      timeframe: "September 2025",
      leadPerson: "Participation Manager",
      startDate: "2025-04",
      endDate: "2025-09"
    }
  ],
  
  // Support requests extracted from GIP
  supportRequests: [
    {
      requestId: "strategic-planning-facilitator",
      supportArea: "Strategic planning facilitation",
      cfMapping: {
        principleId: 3,
        elementId: "3.1",
        elementName: "Strategic Plan"
      },
      requestedTimeline: "2025-03",
      context: "External facilitator for strategic planning workshops",
      status: "Requested",
      developmentArea: "Strategic Plan Development",
      gipExcerpt: "Support with facilitation of strategic planning workshops to ensure wide stakeholder engagement"
    },
    {
      requestId: "edi-mentoring",
      supportArea: "EDI mentoring",
      cfMapping: {
        principleId: 3,
        elementId: "3.3",
        elementName: "EDI (Equality, Diversity & Inclusion)"
      },
      requestedTimeline: "2025-04",
      context: "Support from EDI specialist to mentor our EDI Lead",
      status: "Requested",
      developmentArea: "EDI Implementation",
      gipExcerpt: "EDI specialist mentoring for our newly appointed EDI Lead"
    },
    {
      requestId: "safeguarding-assessment-preparation",
      supportArea: "Safeguarding assessment preparation",
      cfMapping: {
        principleId: 1,
        elementId: "1.2",
        elementName: "Safeguarding Children and Adults"
      },
      requestedTimeline: "2025-09",
      context: "Support to prepare for level 3 safeguarding assessment",
      status: "Requested",
      developmentArea: "Safeguarding Enhancement",
      gipExcerpt: "Pre-assessment support from Child Protection in Sport Unit"
    },
    {
      requestId: "welsh-language-resources",
      supportArea: "Welsh language translation support",
      cfMapping: {
        principleId: 1,
        elementId: "1.7",
        elementName: "Welsh Language"
      },
      requestedTimeline: "2025-06",
      context: "Support with translation of key resources and materials",
      status: "Requested",
      developmentArea: "Welsh Language Development",
      gipExcerpt: "Welsh language translation support for technical paddlesport terminology"
    },
    {
      requestId: "volunteer-management-guidance",
      supportArea: "Volunteer management resources",
      cfMapping: {
        principleId: 2,
        elementId: "2.10",
        elementName: "Key Volunteer Management Including Succession Planning"
      },
      requestedTimeline: "2025-05",
      context: "Best practice guidance and templates for volunteer management",
      status: "Requested",
      developmentArea: "Volunteer Development and Succession",
      gipExcerpt: "Access to best practice resources for volunteer recruitment and retention"
    }
  ],
  
  // Implementation timeline with all activities
  implementationTimeline: {
    timelinePeriod: "2025-01-01 to 2026-03-31",
    activities: [
      {
        activityId: "strategy-1",
        areaTitle: "Strategic Plan Development",
        activity: "Establish working group and review previous strategy",
        cfMapping: {
          principleId: 3,
          principleName: "Insight, Engagement & Strategy"
        },
        startDate: "2025-01",
        endDate: "2025-02",
        timeframeOriginal: "January-February 2025",
        timeframeStandardized: {
          type: "range",
          startQuarter: "Q4 2024-25",
          endQuarter: "Q4 2024-25"
        },
        milestone: "Working group established",
        milestoneDate: "2025-01-31",
        status: "Completed",
        statusPercentage: 100,
        leadPerson: "CEO",
        dependencies: []
      },
      {
        activityId: "strategy-2",
        areaTitle: "Strategic Plan Development",
        activity: "Stakeholder consultation and draft development",
        cfMapping: {
          principleId: 3,
          principleName: "Insight, Engagement & Strategy"
        },
        startDate: "2025-03",
        endDate: "2025-06",
        timeframeOriginal: "March-June 2025",
        timeframeStandardized: {
          type: "range",
          startQuarter: "Q4 2024-25",
          endQuarter: "Q1 2025-26"
        },
        milestone: "Draft strategy document",
        milestoneDate: "2025-06-30",
        status: "Not Started",
        statusPercentage: 0,
        leadPerson: "CEO and Board Chair",
        dependencies: ["strategy-1"]
      },
      {
        activityId: "strategy-3",
        areaTitle: "Strategic Plan Development",
        activity: "Finalise and launch strategy",
        cfMapping: {
          principleId: 3,
          principleName: "Insight, Engagement & Strategy"
        },
        startDate: "2025-07",
        endDate: "2025-10",
        timeframeOriginal: "July-October 2025",
        timeframeStandardized: {
          type: "range",
          startQuarter: "Q2 2025-26",
          endQuarter: "Q3 2025-26"
        },
        milestone: "Strategy launch",
        milestoneDate: "2025-10-15",
        status: "Not Started",
        statusPercentage: 0,
        leadPerson: "CEO and Board Chair",
        dependencies: ["strategy-2"]
      },
      {
        activityId: "edi-1",
        areaTitle: "EDI Implementation",
        activity: "Review audit findings and develop action plan",
        cfMapping: {
          principleId: 3,
          principleName: "Insight, Engagement & Strategy"
        },
        startDate: "2025-02",
        endDate: "2025-04",
        timeframeOriginal: "February-April 2025",
        timeframeStandardized: {
          type: "range",
          startQuarter: "Q4 2024-25",
          endQuarter: "Q1 2025-26"
        },
        milestone: "EDI action plan approved",
        milestoneDate: "2025-04-30",
        status: "In Progress",
        statusPercentage: 40,
        leadPerson: "EDI Lead",
        dependencies: []
      },
      {
        activityId: "edi-2",
        areaTitle: "EDI Implementation",
        activity: "Staff and board training",
        cfMapping: {
          principleId: 3,
          principleName: "Insight, Engagement & Strategy"
        },
        startDate: "2025-05",
        endDate: "2025-08",
        timeframeOriginal: "May-August 2025",
        timeframeStandardized: {
          type: "range",
          startQuarter: "Q1 2025-26",
          endQuarter: "Q2 2025-26"
        },
        milestone: "All staff and board trained",
        milestoneDate: "2025-08-31",
        status: "Not Started",
        statusPercentage: 0,
        leadPerson: "EDI Lead",
        dependencies: ["edi-1"]
      },
      {
        activityId: "edi-3",
        areaTitle: "EDI Implementation",
        activity: "Implementation and monitoring",
        cfMapping: {
          principleId: 3,
          principleName: "Insight, Engagement & Strategy"
        },
        startDate: "2025-09",
        endDate: "2026-03",
        timeframeOriginal: "September 2025-March 2026",
        timeframeStandardized: {
          type: "range",
          startQuarter: "Q2 2025-26",
          endQuarter: "Q4 2025-26"
        },
        milestone: "Annual EDI review",
        milestoneDate: "2026-03-15",
        status: "Not Started",
        statusPercentage: 0,
        leadPerson: "EDI Lead and CEO",
        dependencies: ["edi-2"]
      },
      {
        activityId: "safeguarding-1",
        areaTitle: "Safeguarding Enhancement",
        activity: "Policy review and training",
        cfMapping: {
          principleId: 1,
          principleName: "Organisational/Legal Compliance"
        },
        startDate: "2025-01",
        endDate: "2025-05",
        timeframeOriginal: "January-May 2025",
        timeframeStandardized: {
          type: "range",
          startQuarter: "Q4 2024-25",
          endQuarter: "Q1 2025-26"
        },
        milestone: "Updated policies approved",
        milestoneDate: "2025-05-31",
        status: "In Progress",
        statusPercentage: 30,
        leadPerson: "Safeguarding Lead",
        dependencies: []
      },
      {
        activityId: "safeguarding-2",
        areaTitle: "Safeguarding Enhancement",
        activity: "Club support and implementation",
        cfMapping: {
          principleId: 1,
          principleName: "Organisational/Legal Compliance"
        },
        startDate: "2025-06",
        endDate: "2025-09",
        timeframeOriginal: "June-September 2025",
        timeframeStandardized: {
          type: "range",
          startQuarter: "Q1 2025-26",
          endQuarter: "Q2 2025-26"
        },
        milestone: "Club audit complete",
        milestoneDate: "2025-09-30",
        status: "Not Started",
        statusPercentage: 0,
        leadPerson: "Safeguarding Lead",
        dependencies: ["safeguarding-1"]
      },
      {
        activityId: "safeguarding-3",
        areaTitle: "Safeguarding Enhancement",
        activity: "Level 3 application and assessment",
        cfMapping: {
          principleId: 1,
          principleName: "Organisational/Legal Compliance"
        },
        startDate: "2025-10",
        endDate: "2025-12",
        timeframeOriginal: "October-December 2025",
        timeframeStandardized: {
          type: "range",
          startQuarter: "Q3 2025-26",
          endQuarter: "Q3 2025-26"
        },
        milestone: "Level 3 assessment",
        milestoneDate: "2025-12-15",
        status: "Not Started",
        statusPercentage: 0,
        leadPerson: "Safeguarding Lead",
        dependencies: ["safeguarding-2"]
      },
      {
        activityId: "welsh-1",
        areaTitle: "Welsh Language Development",
        activity: "Review and action planning",
        cfMapping: {
          principleId: 1,
          principleName: "Organisational/Legal Compliance"
        },
        startDate: "2025-03",
        endDate: "2025-05",
        timeframeOriginal: "March-May 2025",
        timeframeStandardized: {
          type: "range",
          startQuarter: "Q4 2024-25",
          endQuarter: "Q1 2025-26"
        },
        milestone: "Welsh language action plan",
        milestoneDate: "2025-05-31",
        status: "In Progress",
        statusPercentage: 70,
        leadPerson: "Communications Manager",
        dependencies: []
      },
      {
        activityId: "welsh-2",
        areaTitle: "Welsh Language Development",
        activity: "Staff training and resource development",
        cfMapping: {
          principleId: 1,
          principleName: "Organisational/Legal Compliance"
        },
        startDate: "2025-06",
        endDate: "2025-10",
        timeframeOriginal: "June-October 2025",
        timeframeStandardized: {
          type: "range",
          startQuarter: "Q1 2025-26",
          endQuarter: "Q3 2025-26"
        },
        milestone: "Key resources available bilingually",
        milestoneDate: "2025-10-31",
        status: "Not Started",
        statusPercentage: 0,
        leadPerson: "Communications Manager",
        dependencies: ["welsh-1"]
      },
      {
        activityId: "welsh-3",
        areaTitle: "Welsh Language Development",
        activity: "Website update and implementation",
        cfMapping: {
          principleId: 1,
          principleName: "Organisational/Legal Compliance"
        },
        startDate: "2025-11",
        endDate: "2026-03",
        timeframeOriginal: "November 2025-March 2026",
        timeframeStandardized: {
          type: "range",
          startQuarter: "Q3 2025-26",
          endQuarter: "Q4 2025-26"
        },
        milestone: "Fully bilingual website",
        milestoneDate: "2026-03-31",
        status: "Not Started",
        statusPercentage: 0,
        leadPerson: "Communications Manager",
        dependencies: ["welsh-2"]
      },
      {
        activityId: "volunteer-1",
        areaTitle: "Volunteer Development and Succession",
        activity: "Role mapping and description development",
        cfMapping: {
          principleId: 2,
          principleName: "People and Cultures"
        },
        startDate: "2025-04",
        endDate: "2025-06",
        timeframeOriginal: "April-June 2025",
        timeframeStandardized: {
          type: "range",
          startQuarter: "Q1 2025-26",
          endQuarter: "Q1 2025-26"
        },
        milestone: "Role descriptions complete",
        milestoneDate: "2025-06-30",
        status: "Not Started",
        statusPercentage: 0,
        leadPerson: "Participation Manager",
        dependencies: []
      },
      {
        activityId: "volunteer-2",
        areaTitle: "Volunteer Development and Succession",
        activity: "Recruitment campaign and recognition programme",
        cfMapping: {
          principleId: 2,
          principleName: "People and Cultures"
        },
        startDate: "2025-07",
        endDate: "2025-09",
        timeframeOriginal: "July-September 2025",
        timeframeStandardized: {
          type: "range",
          startQuarter: "Q2 2025-26",
          endQuarter: "Q2 2025-26"
        },
        milestone: "Volunteer recognition awards",
        milestoneDate: "2025-09-15",
        status: "Not Started",
        statusPercentage: 0,
        leadPerson: "Participation Manager",
        dependencies: ["volunteer-1"]
      }
    ]
  },
  
  // Raw text excerpts from GIP
  gipExcerpts: [
    {
      areaTitle: "Strategic Plan Development",
      text: "Establish a strategy working group with board, staff, and member representation",
      cfMapping: {
        principleId: 3,
        elementId: "3.1"
      },
      section: "Actions to complete",
      confidence: 0.95
    },
    {
      areaTitle: "Strategic Plan Development",
      text: "Development of a comprehensive new strategy for 2025-2029",
      cfMapping: {
        principleId: 3,
        elementId: "3.1"
      },
      section: "Objectives",
      confidence: 0.97
    },
    {
      areaTitle: "EDI Implementation",
      text: "Implement recommendations from the EDI audit",
      cfMapping: {
        principleId: 3,
        elementId: "3.3"
      },
      section: "Objectives",
      confidence: 0.94
    },
    {
      areaTitle: "EDI Implementation",
      text: "Initial prioritisation of actions complete, action plan in development",
      cfMapping: {
        principleId: 3,
        elementId: "3.3"
      },
      section: "Progress made",
      confidence: 0.90
    },
    {
      areaTitle: "Safeguarding Enhancement",
      text: "Provide advanced training for all safeguarding leads and officers",
      cfMapping: {
        principleId: 1,
        elementId: "1.2"
      },
      section: "Actions to complete",
      confidence: 0.93
    },
    {
      areaTitle: "Safeguarding Enhancement",
      text: "Apply for level 3 safeguarding accreditation",
      cfMapping: {
        principleId: 1,
        elementId: "1.2"
      },
      section: "Actions to complete",
      confidence: 0.95
    },
    {
      areaTitle: "Welsh Language Development",
      text: "Develop a Welsh language action plan",
      cfMapping: {
        principleId: 1,
        elementId: "1.7"
      },
      section: "Actions to complete",
      confidence: 0.92
    },
    {
      areaTitle: "Welsh Language Development",
      text: "Review complete, action plan drafted",
      cfMapping: {
        principleId: 1,
        elementId: "1.7"
      },
      section: "Progress made",
      confidence: 0.89
    },
    {
      areaTitle: "Volunteer Development and Succession",
      text: "Create volunteer development and succession plan",
      cfMapping: {
        principleId: 2,
        elementId: "2.10"
      },
      section: "Objectives",
      confidence: 0.91
    },
    {
      areaTitle: "Volunteer Development and Succession",
      text: "Develop training pathway for volunteers",
      cfMapping: {
        principleId: 2,
        elementId: "2.10"
      },
      section: "Actions to complete",
      confidence: 0.88
    }
  ]
},
"girlguiding-cymru": {
  // Basic partner information
  id: "girlguiding-cymru",
  name: "Girlguiding Cymru",
  documentDate: "2025-01-22",
  
  // Framework alignment summary
  frameworkAlignment: [
    {
      principleId: 3,
      principleName: "Insight, Engagement & Strategy",
      focusAreaCount: 2,
      elements: ["3.1 Strategic Plan", "3.3 EDI (Equality, Diversity & Inclusion)"],
      implementationStatus: "In Progress",
      completionPercentage: 20,
      gipExcerpts: ["Development of a comprehensive new strategy for 2025-2029", "Implement recommendations from the EDI audit"]
    },
    {
      principleId: 1,
      principleName: "Organisational/Legal Compliance",
      focusAreaCount: 2,
      elements: ["1.2 Safeguarding Children and Adults", "1.7 Welsh Language"],
      implementationStatus: "In Progress",
      completionPercentage: 25,
      gipExcerpts: ["Maintain safeguarding standards and seek level 3 accreditation", "Develop our Welsh Language offering"]
    },
    {
      principleId: 4,
      principleName: "People and Cultures",
      focusAreaCount: 3,
      elements: ["2.10 Key Volunteer Management Including Succession Planning"],
      implementationStatus: "Not Started",
      completionPercentage: 0,
      gipExcerpts: ["Create volunteer development and succession plan", "Improve volunteer recruitment and retention"]
    }
  ],
  
  // Detailed improvement areas from GIP
  developmentAreas: [
    {
      areaId: "board-composition",
      areaTitle: "Review and refresh the organisations board composition",
      cfMapping: {
        principleId: 2,
        principleName: "People and Cultures",
        elementId: "2.3",
        elementName: "Directors Recruitment/Appointment"
      },
      secondaryCfMapping: {
        principleId: 2,
        elementId: "2.5",
        elementName: "Board/Committee Terms of Office & Composition"
      },
      objective: "Align and achieve Sport Wales' target of a gender parity of 60/40, Conduct skills audit, Review Articles",
      actions: [
        "Align and achieve Sport Wales' target of a gender parity of 60/40",
        "Conduct skills audit to ensure board is skilled, balance and diverse",
        "Review Articles to ensure recruitment and terms of board director are fit for purpose."
      ],
      progressStatus: "Not Started",
      progressDetails: "",
      timeframe: "July 2025",
      leadPerson: "Chair",
      startDate: "2025-02",
      endDate: "2025-07"
    },
    {
      areaId: "transgender-policy",
      areaTitle: "Transgender policy to be created",
      cfMapping: {
        principleId: 3,
        principleName: "Insight, Engagement & Strategy",
        elementId: "3.3",
        elementName: "EDI (Equality, Diversity & Inclusion)"
      },
      objective: "Create inclusive transgender policy",
      actions: [
        "All board and executive to engage and attend Guidance workshops",
        "Consultation with members",
        "Policy creation",
        "Policy approval",
        "Policy outstretch"
      ],
      progressStatus: "Not Started",
      progressDetails: "",
      timeframe: "February 2026",
      leadPerson: "EDI manager",
      startDate: "2025-05",
      endDate: "2026-02"
    },
    {
      areaId: "board-meetings",
      areaTitle: "Board meetings to become more effective",
      cfMapping: {
        principleId: 4,
        principleName: "Effectively Run Organisation",
        elementId: "4.1",
        elementName: "Effective Meetings"
      },
      objective: "Improve board meeting effectiveness",
      actions: [
        "Agenda format to be reviewed and revised",
        "Board directors to complete survey feedback",
        "Reflective away day for board"
      ],
      progressStatus: "Not Started",
      progressDetails: "",
      timeframe: "September 2025",
      leadPerson: "Chair",
      startDate: "2025-03",
      endDate: "2025-09"
    },
    {
      areaId: "safeguarding-level-2",
      areaTitle: "Achieve Level 2 Safeguarding",
      cfMapping: {
        principleId: 1,
        principleName: "Organisational/Legal Compliance",
        elementId: "1.2",
        elementName: "Safeguarding Children and Adults"
      },
      objective: "Achieve Level 2 Safeguarding certification",
      actions: [
        "Engage with CPSU to create action plan",
        "Outstretch action plan",
        "Attend panel assessment"
      ],
      progressStatus: "Not Started",
      progressDetails: "",
      timeframe: "March 2025",
      leadPerson: "Safeguarding lead",
      startDate: "2025-01",
      endDate: "2025-03"
    }
  ],
  
  // Support requests extracted from GIP
  supportRequests: [
    {
      requestId: "strategic-planning-facilitator",
      supportArea: "Strategic planning facilitation",
      cfMapping: {
        principleId: 3,
        elementId: "3.1",
        elementName: "Strategic Plan"
      },
      requestedTimeline: "2025-03",
      context: "External facilitator for strategic planning workshops",
      status: "Requested",
      developmentArea: "Strategic Plan Development",
      gipExcerpt: "Support with facilitation of strategic planning workshops to ensure wide stakeholder engagement"
    },
    {
      requestId: "edi-mentoring",
      supportArea: "EDI mentoring",
      cfMapping: {
        principleId: 3,
        elementId: "3.3",
        elementName: "EDI (Equality, Diversity & Inclusion)"
      },
      requestedTimeline: "2025-04",
      context: "Support from EDI specialist to mentor our EDI Lead",
      status: "Requested",
      developmentArea: "EDI Implementation",
      gipExcerpt: "EDI specialist mentoring for our newly appointed EDI Lead"
    },
    {
      requestId: "safeguarding-assessment-preparation",
      supportArea: "Safeguarding assessment preparation",
      cfMapping: {
        principleId: 1,
        elementId: "1.2",
        elementName: "Safeguarding Children and Adults"
      },
      requestedTimeline: "2025-09",
      context: "Support to prepare for level 3 safeguarding assessment",
      status: "Requested",
      developmentArea: "Safeguarding Enhancement",
      gipExcerpt: "Pre-assessment support from Child Protection in Sport Unit"
    },
    {
      requestId: "welsh-language-resources",
      supportArea: "Welsh language translation support",
      cfMapping: {
        principleId: 1,
        elementId: "1.7",
        elementName: "Welsh Language"
      },
      requestedTimeline: "2025-06",
      context: "Support with translation of key resources and materials",
      status: "Requested",
      developmentArea: "Welsh Language Development",
      gipExcerpt: "Welsh language translation support for technical paddlesport terminology"
    },
    {
      requestId: "volunteer-management-guidance",
      supportArea: "Volunteer management resources",
      cfMapping: {
        principleId: 2,
        elementId: "2.10",
        elementName: "Key Volunteer Management Including Succession Planning"
      },
      requestedTimeline: "2025-05",
      context: "Best practice guidance and templates for volunteer management",
      status: "Requested",
      developmentArea: "Volunteer Development and Succession",
      gipExcerpt: "Access to best practice resources for volunteer recruitment and retention"
    }
  ],
  
  // Implementation timeline with all activities
  implementationTimeline: {
    timelinePeriod: "2025-01-01 to 2026-03-31",
    activities: [
      {
        activityId: "strategy-1",
        areaTitle: "Strategic Plan Development",
        activity: "Establish working group and review previous strategy",
        cfMapping: {
          principleId: 3,
          principleName: "Insight, Engagement & Strategy"
        },
        startDate: "2025-01",
        endDate: "2025-02",
        timeframeOriginal: "January-February 2025",
        timeframeStandardized: {
          type: "range",
          startQuarter: "Q4 2024-25",
          endQuarter: "Q4 2024-25"
        },
        milestone: "Working group established",
        milestoneDate: "2025-01-31",
        status: "Completed",
        statusPercentage: 100,
        leadPerson: "CEO",
        dependencies: []
      },
      {
        activityId: "strategy-2",
        areaTitle: "Strategic Plan Development",
        activity: "Stakeholder consultation and draft development",
        cfMapping: {
          principleId: 3,
          principleName: "Insight, Engagement & Strategy"
        },
        startDate: "2025-03",
        endDate: "2025-06",
        timeframeOriginal: "March-June 2025",
        timeframeStandardized: {
          type: "range",
          startQuarter: "Q4 2024-25",
          endQuarter: "Q1 2025-26"
        },
        milestone: "Draft strategy document",
        milestoneDate: "2025-06-30",
        status: "Not Started",
        statusPercentage: 0,
        leadPerson: "CEO and Board Chair",
        dependencies: ["strategy-1"]
      },
      {
        activityId: "strategy-3",
        areaTitle: "Strategic Plan Development",
        activity: "Finalise and launch strategy",
        cfMapping: {
          principleId: 3,
          principleName: "Insight, Engagement & Strategy"
        },
        startDate: "2025-07",
        endDate: "2025-10",
        timeframeOriginal: "July-October 2025",
        timeframeStandardized: {
          type: "range",
          startQuarter: "Q2 2025-26",
          endQuarter: "Q3 2025-26"
        },
        milestone: "Strategy launch",
        milestoneDate: "2025-10-15",
        status: "Not Started",
        statusPercentage: 0,
        leadPerson: "CEO and Board Chair",
        dependencies: ["strategy-2"]
      },
      {
        activityId: "edi-1",
        areaTitle: "EDI Implementation",
        activity: "Review audit findings and develop action plan",
        cfMapping: {
          principleId: 3,
          principleName: "Insight, Engagement & Strategy"
        },
        startDate: "2025-02",
        endDate: "2025-04",
        timeframeOriginal: "February-April 2025",
        timeframeStandardized: {
          type: "range",
          startQuarter: "Q4 2024-25",
          endQuarter: "Q1 2025-26"
        },
        milestone: "EDI action plan approved",
        milestoneDate: "2025-04-30",
        status: "In Progress",
        statusPercentage: 40,
        leadPerson: "EDI Lead",
        dependencies: []
      },
      {
        activityId: "edi-2",
        areaTitle: "EDI Implementation",
        activity: "Staff and board training",
        cfMapping: {
          principleId: 3,
          principleName: "Insight, Engagement & Strategy"
        },
        startDate: "2025-05",
        endDate: "2025-08",
        timeframeOriginal: "May-August 2025",
        timeframeStandardized: {
          type: "range",
          startQuarter: "Q1 2025-26",
          endQuarter: "Q2 2025-26"
        },
        milestone: "All staff and board trained",
        milestoneDate: "2025-08-31",
        status: "Not Started",
        statusPercentage: 0,
        leadPerson: "EDI Lead",
        dependencies: ["edi-1"]
      },
      {
        activityId: "edi-3",
        areaTitle: "EDI Implementation",
        activity: "Implementation and monitoring",
        cfMapping: {
          principleId: 3,
          principleName: "Insight, Engagement & Strategy"
        },
        startDate: "2025-09",
        endDate: "2026-03",
        timeframeOriginal: "September 2025-March 2026",
        timeframeStandardized: {
          type: "range",
          startQuarter: "Q2 2025-26",
          endQuarter: "Q4 2025-26"
        },
        milestone: "Annual EDI review",
        milestoneDate: "2026-03-15",
        status: "Not Started",
        statusPercentage: 0,
        leadPerson: "EDI Lead and CEO",
        dependencies: ["edi-2"]
      },
      {
        activityId: "safeguarding-1",
        areaTitle: "Safeguarding Enhancement",
        activity: "Policy review and training",
        cfMapping: {
          principleId: 1,
          principleName: "Organisational/Legal Compliance"
        },
        startDate: "2025-01",
        endDate: "2025-05",
        timeframeOriginal: "January-May 2025",
        timeframeStandardized: {
          type: "range",
          startQuarter: "Q4 2024-25",
          endQuarter: "Q1 2025-26"
        },
        milestone: "Updated policies approved",
        milestoneDate: "2025-05-31",
        status: "In Progress",
        statusPercentage: 30,
        leadPerson: "Safeguarding Lead",
        dependencies: []
      },
      {
        activityId: "safeguarding-2",
        areaTitle: "Safeguarding Enhancement",
        activity: "Club support and implementation",
        cfMapping: {
          principleId: 1,
          principleName: "Organisational/Legal Compliance"
        },
        startDate: "2025-06",
        endDate: "2025-09",
        timeframeOriginal: "June-September 2025",
        timeframeStandardized: {
          type: "range",
          startQuarter: "Q1 2025-26",
          endQuarter: "Q2 2025-26"
        },
        milestone: "Club audit complete",
        milestoneDate: "2025-09-30",
        status: "Not Started",
        statusPercentage: 0,
        leadPerson: "Safeguarding Lead",
        dependencies: ["safeguarding-1"]
      },
      {
        activityId: "safeguarding-3",
        areaTitle: "Safeguarding Enhancement",
        activity: "Level 3 application and assessment",
        cfMapping: {
          principleId: 1,
          principleName: "Organisational/Legal Compliance"
        },
        startDate: "2025-10",
        endDate: "2025-12",
        timeframeOriginal: "October-December 2025",
        timeframeStandardized: {
          type: "range",
          startQuarter: "Q3 2025-26",
          endQuarter: "Q3 2025-26"
        },
        milestone: "Level 3 assessment",
        milestoneDate: "2025-12-15",
        status: "Not Started",
        statusPercentage: 0,
        leadPerson: "Safeguarding Lead",
        dependencies: ["safeguarding-2"]
      },
      {
        activityId: "welsh-1",
        areaTitle: "Welsh Language Development",
        activity: "Review and action planning",
        cfMapping: {
          principleId: 1,
          principleName: "Organisational/Legal Compliance"
        },
        startDate: "2025-03",
        endDate: "2025-05",
        timeframeOriginal: "March-May 2025",
        timeframeStandardized: {
          type: "range",
          startQuarter: "Q4 2024-25",
          endQuarter: "Q1 2025-26"
        },
        milestone: "Welsh language action plan",
        milestoneDate: "2025-05-31",
        status: "In Progress",
        statusPercentage: 70,
        leadPerson: "Communications Manager",
        dependencies: []
      },
      {
        activityId: "welsh-2",
        areaTitle: "Welsh Language Development",
        activity: "Staff training and resource development",
        cfMapping: {
          principleId: 1,
          principleName: "Organisational/Legal Compliance"
        },
        startDate: "2025-06",
        endDate: "2025-10",
        timeframeOriginal: "June-October 2025",
        timeframeStandardized: {
          type: "range",
          startQuarter: "Q1 2025-26",
          endQuarter: "Q3 2025-26"
        },
        milestone: "Key resources available bilingually",
        milestoneDate: "2025-10-31",
        status: "Not Started",
        statusPercentage: 0,
        leadPerson: "Communications Manager",
        dependencies: ["welsh-1"]
      },
      {
        activityId: "welsh-3",
        areaTitle: "Welsh Language Development",
        activity: "Website update and implementation",
        cfMapping: {
          principleId: 1,
          principleName: "Organisational/Legal Compliance"
        },
        startDate: "2025-11",
        endDate: "2026-03",
        timeframeOriginal: "November 2025-March 2026",
        timeframeStandardized: {
          type: "range",
          startQuarter: "Q3 2025-26",
          endQuarter: "Q4 2025-26"
        },
        milestone: "Fully bilingual website",
        milestoneDate: "2026-03-31",
        status: "Not Started",
        statusPercentage: 0,
        leadPerson: "Communications Manager",
        dependencies: ["welsh-2"]
      },
      {
        activityId: "volunteer-1",
        areaTitle: "Volunteer Development and Succession",
        activity: "Role mapping and description development",
        cfMapping: {
          principleId: 2,
          principleName: "People and Cultures"
        },
        startDate: "2025-04",
        endDate: "2025-06",
        timeframeOriginal: "April-June 2025",
        timeframeStandardized: {
          type: "range",
          startQuarter: "Q1 2025-26",
          endQuarter: "Q1 2025-26"
        },
        milestone: "Role descriptions complete",
        milestoneDate: "2025-06-30",
        status: "Not Started",
        statusPercentage: 0,
        leadPerson: "Participation Manager",
        dependencies: []
      },
      {
        activityId: "volunteer-2",
        areaTitle: "Volunteer Development and Succession",
        activity: "Recruitment campaign and recognition programme",
        cfMapping: {
          principleId: 2,
          principleName: "People and Cultures"
        },
        startDate: "2025-07",
        endDate: "2025-09",
        timeframeOriginal: "July-September 2025",
        timeframeStandardized: {
          type: "range",
          startQuarter: "Q2 2025-26",
          endQuarter: "Q2 2025-26"
        },
        milestone: "Volunteer recognition awards",
        milestoneDate: "2025-09-15",
        status: "Not Started",
        statusPercentage: 0,
        leadPerson: "Participation Manager",
        dependencies: ["volunteer-1"]
      }
    ]
  },
  
  // Raw text excerpts from GIP
  gipExcerpts: [
    {
      areaTitle: "Strategic Plan Development",
      text: "Establish a strategy working group with board, staff, and member representation",
      cfMapping: {
        principleId: 3,
        elementId: "3.1"
      },
      section: "Actions to complete",
      confidence: 0.95
    },
    {
      areaTitle: "Strategic Plan Development",
      text: "Development of a comprehensive new strategy for 2025-2029",
      cfMapping: {
        principleId: 3,
        elementId: "3.1"
      },
      section: "Objectives",
      confidence: 0.97
    },
    {
      areaTitle: "EDI Implementation",
      text: "Implement recommendations from the EDI audit",
      cfMapping: {
        principleId: 3,
        elementId: "3.3"
      },
      section: "Objectives",
      confidence: 0.94
    },
    {
      areaTitle: "EDI Implementation",
      text: "Initial prioritisation of actions complete, action plan in development",
      cfMapping: {
        principleId: 3,
        elementId: "3.3"
      },
      section: "Progress made",
      confidence: 0.90
    },
    {
      areaTitle: "Safeguarding Enhancement",
      text: "Provide advanced training for all safeguarding leads and officers",
      cfMapping: {
        principleId: 1,
        elementId: "1.2"
      },
      section: "Actions to complete",
      confidence: 0.93
    },
    {
      areaTitle: "Safeguarding Enhancement",
      text: "Apply for level 3 safeguarding accreditation",
      cfMapping: {
        principleId: 1,
        elementId: "1.2"
      },
      section: "Actions to complete",
      confidence: 0.95
    },
    {
      areaTitle: "Welsh Language Development",
      text: "Develop a Welsh language action plan",
      cfMapping: {
        principleId: 1,
        elementId: "1.7"
      },
      section: "Actions to complete",
      confidence: 0.92
    },
    {
      areaTitle: "Welsh Language Development",
      text: "Review complete, action plan drafted",
      cfMapping: {
        principleId: 1,
        elementId: "1.7"
      },
      section: "Progress made",
      confidence: 0.89
    },
    {
      areaTitle: "Volunteer Development and Succession",
      text: "Create volunteer development and succession plan",
      cfMapping: {
        principleId: 2,
        elementId: "2.10"
      },
      section: "Objectives",
      confidence: 0.91
    },
    {
      areaTitle: "Volunteer Development and Succession",
      text: "Develop training pathway for volunteers",
      cfMapping: {
        principleId: 2,
        elementId: "2.10"
      },
      section: "Actions to complete",
      confidence: 0.88
    }
  ]
},
"hockey-wales": {
  id: "hockey-wales",
  name: "Hockey Wales",
  documentDate: "2025-03-15",

  frameworkAlignment: [
    {
      principleId: 1,
      principleName: "Organisational/Legal Compliance",
      focusAreaCount: 2,
      elements: ["1.1 Governing Document(s) and Review", "1.5 Comply with Legal Requirements"],
      implementationStatus: "In Progress",
      completionPercentage: 40,
      gipExcerpts: [
        "Full constitutional review scheduled for Q3 2025",
        "Legal compliance audit completed Q1 2025"
      ]
    },
    {
      principleId: 2,
      principleName: "People and Cultures",
      focusAreaCount: 3,
      elements: ["2.3 Organisational Culture and Behaviours", "2.6 Board Review and Evaluation", "2.7 Board and Employee Training & Development"],
      implementationStatus: "Not Started",
      completionPercentage: 10,
      gipExcerpts: [
        "New diversity and inclusion initiative planned"
      ]
    }
  ],

  developmentAreas: [
    {
      areaId: "DA-HW-01",
      areaTitle: "Governance Structure Modernization",
      cfMapping: {
        principleId: 1,
        principleName: "Organisational/Legal Compliance",
        elementId: "1.1",
        elementName: "Governing Document(s) and Review"
      },
      objective: "Update constitution and governance framework",
      actions: [
        "Form constitutional review working group",
        "Benchmark against Sport Wales guidelines",
        "Consult membership on proposed changes",
        "Submit revised constitution for AGM approval"
      ],
      progressStatus: "In Progress",
      progressDetails: "Working group formed, initial draft completed",
      timeframe: "2025 Q2 - 2026 Q1",
      leadPerson: "Chairperson - Gareth Thomas",
      startDate: "2025-04-01",
      endDate: "2026-01-31"
    },
    {
      areaId: "DA-HW-02",
      areaTitle: "Board Development Programme",
      cfMapping: {
        principleId: 2,
        principleName: "People and Cultures", 
        elementId: "2.7",
        elementName: "Board and Employee Training & Development"
      },
      objective: "Enhance board governance capabilities",
      actions: [
        "Conduct skills gap analysis",
        "Develop annual training plan",
        "Implement mentoring scheme",
        "Establish performance evaluation process"
      ],
      progressStatus: "Not Started",
      progressDetails: "",
      timeframe: "2025 Q3 - 2026 Q2",
      leadPerson: "Vice Chair - Sian Davies",
      startDate: "2025-07-01",
      endDate: "2026-06-30"
    }
  ],

  supportRequests: [
    {
      requestId: "SR-HW-001",
      supportArea: "Constitutional Review",
      cfMapping: {
        principleId: 1,
        elementId: "1.1",
        elementName: "Governing Document(s) and Review"
      },
      requestedTimeline: "2025-09",
      context: "Request legal support for constitutional amendments",
      status: "Requested",
      developmentArea: "DA-HW-01",
      gipExcerpt: "Seeking Sport Wales legal team input on proposed constitutional changes"
    },
    {
      requestId: "SR-HW-002",
      supportArea: "Board Training",
      cfMapping: {
        principleId: 2,
        elementId: "2.7",
        elementName: "Board and Employee Training & Development"
      },
      requestedTimeline: "2025-08",
      context: "Request access to governance training resources",
      status: "Requested",
      developmentArea: "DA-HW-02",
      gipExcerpt: "Need access to Sport Wales board development toolkit and training materials"
    }
  ],

  implementationTimeline: {
    timelinePeriod: "2025-04-01 to 2026-06-30",
    activities: [
      {
        activityId: "ACT-HW-01",
        areaTitle: "Governance Structure Modernization",
        activity: "Constitutional review working group formation",
        cfMapping: {
          principleId: 1,
          principleName: "Organisational/Legal Compliance"
        },
        startDate: "2025-04-01",
        endDate: "2025-05-15",
        timeframeOriginal: "Phase 1 - Setup",
        timeframeStandardized: {
          type: "quarter",
          startQuarter: "2025 Q2",
          endQuarter: "2025 Q2"
        },
        milestone: "Working group operational",
        milestoneDate: "2025-05-01",
        status: "Completed",
        statusPercentage: 100,
        leadPerson: "Chairperson - Gareth Thomas",
        dependencies: []
      },
      {
        activityId: "ACT-HW-02",
        areaTitle: "Governance Structure Modernization",
        activity: "Draft constitution consultation",
        cfMapping: {
          principleId: 1,
          principleName: "Organisational/Legal Compliance"
        },
        startDate: "2025-06-01",
        endDate: "2025-08-31",
        timeframeOriginal: "Phase 2 - Consultation",
        timeframeStandardized: {
          type: "range",
          startQuarter: "2025 Q2",
          endQuarter: "2025 Q3"
        },
        milestone: "Consultation report finalized",
        milestoneDate: "2025-09-15",
        status: "In Progress",
        statusPercentage: 30,
        leadPerson: "Company Secretary - Owen Rees",
        dependencies: ["ACT-HW-01"]
      }
    ]
  },

  gipExcerpts: [
    {
      areaTitle: "Governance Structure Modernization",
      text: "Constitutional review working group to include board members and external legal advisor",
      cfMapping: {
        principleId: 1,
        elementId: "1.1"
      },
      section: "Governance Improvement Plan Section 4.2",
      confidence: 0.95
    },
    {
      areaTitle: "Board Development Programme",
      text: "Annual training plan to include financial governance and strategic leadership modules",
      cfMapping: {
        principleId: 2,
        elementId: "2.7"
      },
      section: "Capability Development Priorities",
      confidence: 0.90
    }
  ]
}
};

export default singlePartnerAnalysis;