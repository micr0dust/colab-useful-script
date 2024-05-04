import os
from urllib.parse import quote

# The directory to list files from
directory_path = './'

# Get the list of files
files = os.listdir(directory_path)

# Start of the HTML string
html_string = """
<!DOCTYPE html>
<html>
<head>
    <title>File Listing</title>
</head>
<body>
    <h1>File Listing</h1>
    <ul id="file-list">
"""

# Loop through all the files and add them to the HTML string
for file in files:
    html_string += f'<li><a href="{quote(file)}">{file}</a></li>\n'

# End of the HTML string
html_string += """
    </ul>
</body>
</html>
"""

# Write the HTML string to a file
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html_string)