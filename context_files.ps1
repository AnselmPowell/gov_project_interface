#!/usr/bin/env powershell

# Output file
$OUTPUT_FILE = "output.txt"

# Clear the output file
Set-Content -Path $OUTPUT_FILE -Value ""

# Get script's directory
$BASE_DIR = $PSScriptRoot

# Check arguments
if ($args.Count -eq 0) {
    Write-Output "Usage: $($MyInvocation.MyCommand.Name) <relative/path/to/file1> <relative/path/to/file2> ..."
    exit 1
}

foreach ($filepath in $args) {
    # Normalize path separators
    $searchPath = $filepath -replace '/', '\'

    # Find matching files excluding directories
    $found_file = Get-ChildItem -Path $BASE_DIR -Recurse -File -ErrorAction SilentlyContinue | 
        Where-Object {
            $relativePath = $_.FullName.Substring($BASE_DIR.Length + 1) -replace '\\', '/'
            $relativePath -like "$filepath" -and
            $_.FullName -notmatch "node_modules|\.next|\.git"
        } | Select-Object -First 1

    if ($found_file) {
        Add-Content -Path $OUTPUT_FILE -Value "--- Start of $filepath ---"
        Get-Content -Path $found_file.FullName -Raw | Add-Content -Path $OUTPUT_FILE
        Add-Content -Path $OUTPUT_FILE -Value "`n--- End of $filepath ---`n"
    }
    else {
        Add-Content -Path $OUTPUT_FILE -Value "File not found: $filepath"
    }
}

Write-Output "Matching files merged into $OUTPUT_FILE"