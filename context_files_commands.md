# context_files.ps1 - Project Context Aggregator

## Purpose
This PowerShell script aggregates critical project files into a single output.txt for AI-assisted development context. It automatically:
- Excludes node_modules, .next, and .git directories
- Maintains original file boundaries with markers
- Preserves relative path relationships

## Basic Usage
```powershell
# Windows (with execution policy bypass)
powershell -ExecutionPolicy Bypass -File context_files.ps1 [file1] [file2] ...

# Linux/macOS (PowerShell Core)
pwsh context_files.ps1 [file1] [file2] ...
```

## Output
Creates/updates output.txt with:
```
--- Start of [relative/path] ---
[file contents]
--- End of [relative/path] ---


# Below you will see our main commands 

tree /F > structure.txt

:: Main files 
powershell -ExecutionPolicy Bypass -File context_files.ps1 .env next.config.js src/config.js src/app/layout.js src/app/page.js src/app/api/governance/analysis/route.js src/app/components/governance/GovernanceAnalysis.client.jsx src/app/contexts/AnalysisContext.client.jsx src/app/components/governance/dashboard/AnalysisDashboard.client.jsx src/app/components/governance/dashboard/DashboardConc/config.js src/app/layout.js src/app/page.js src/app/api/governance/analysis/route.js src/app/components/governance/GovernanceAnalysis.client.jsx src/app/contexts/AnalysisContext.client.jsx src/app/components/governance/dashboard/AnalysisDashboard.client.jsx src/app/components/governance/dashboard/DashboardCons/governance/GovernanceAnalysis.client.jsx src/app/contexts/AnalysisContext.client.jsx src/app/components/governance/dashboard/AnalysisDashboard.client.jsx src/app/components/governance/dashboard/DashboardCons/governance/dashboard/AnalysisDashboard.client.jsx src/app/components/governance/dashboard/DashboardContent.client.jsx src/app/components/governance/dashboard/PrincipleSummary.client.jsx src/app/components/governance/charts/PieChart.client.jsx src/app/components/governance/ProcessingOverlay.client.jsx

:: Validate context
... nothing yet

:: Update documentation
... nothing yet


first and always run tree /F > structure.txt to get the structure.txt then run the  context_files.ps1 ... command


## Command Repository 

tree /F > structure.txt

:: Main files 
powershell -File context_files.ps1 structure.txt .env next.config.js src/config.js src/app/layout.js src/app/page.js src/app/api/governance/analysis/route.js src/app/components/governance/GovernanceAnalysis.client.jsx src/app/contexts/AnalysisContext.client.jsx src/app/components/governance/dashboard/AnalysisDashboard.client.jsx src/app/components/governance/dashboard/DashboardConc/config.js src/app/layout.js src/app/page.js src/app/api/governance/analysis/route.js src/app/components/governance/GovernanceAnalysis.client.jsx src/app/contexts/AnalysisContext.client.jsx src/app/components/governance/dashboard/AnalysisDashboard.client.jsx src/app/components/governance/dashboard/DashboardCons/governance/GovernanceAnalysis.client.jsx src/app/contexts/AnalysisContext.client.jsx src/app/components/governance/dashboard/AnalysisDashboard.client.jsx src/app/components/governance/dashboard/DashboardCons/governance/dashboard/AnalysisDashboard.client.jsx src/app/components/governance/dashboard/DashboardContent.client.jsx src/app/components/governance/dashboard/PrincipleSummary.client.jsx src/app/components/governance/charts/PieChart.client.jsx src/app/components/governance/ProcessingOverlay.client.jsx
