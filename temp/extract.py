import re
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

temp_dir = 'temp'
files = [os.path.join(temp_dir, f) for f in os.listdir(temp_dir) if f.endswith('.html')]

output_lines = []

for f in files:
    try:
        with open(f, 'r', encoding='utf-8') as fp:
            content = fp.read()
        # Remove style and script tags
        content = re.sub(r'<style[^>]*>.*?</style>', '', content, flags=re.DOTALL)
        content = re.sub(r'<script[^>]*>.*?</script>', '', content, flags=re.DOTALL)
        # Remove tags
        content = re.sub(r'<[^>]+>', ' ', content)
        # Collapse whitespace
        content = re.sub(r'\s+', ' ', content).strip()
        output_lines.append(f'=== FILE: {os.path.basename(f)} ===')
        output_lines.append(content[:5000])
        output_lines.append('')
    except Exception as e:
        output_lines.append(f'Error with {f}: {e}')

with open(os.path.join(temp_dir, 'extracted_content.txt'), 'w', encoding='utf-8') as out:
    out.write('\n'.join(output_lines))

print('Done!')
