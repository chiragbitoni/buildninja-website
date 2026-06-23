import re

with open('temp/Git Changes.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find commit sections
pattern = r'min-width:100px[^>]*>([^<]+)</span></div><div class="bn-flex[^>]+style="width:160px;flex-shrink:0"><span[^>]+><span role=img'
msgs = re.findall(pattern, content)
print('=== COMMIT MESSAGES ===')
for m in msgs[:20]:
    print(m.strip())

# Authors
pat2 = r'</svg></span>([^<]+)</span></div><div class="bn-flex[^>]+style="width:160px;flex-shrink:0"><div class="bn-flex'
authors = re.findall(pat2, content)
print('\n=== AUTHORS ===')
for a in authors[:20]:
    print(a.strip())

# Commit hashes
pat3 = r'commit/([a-f0-9]{40})'
hashes = re.findall(pat3, content)
print('\n=== COMMIT HASHES ===')
for h in hashes[:20]:
    print(h)
