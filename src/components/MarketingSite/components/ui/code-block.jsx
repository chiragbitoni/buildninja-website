'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export function CodeBlock({ filename, language, code }) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="code-block">
      <div>
        <span>{filename}</span>
        <button type="button" onClick={copyCode} aria-label={copied ? 'Code copied' : 'Copy code'}>
          {copied ? <Check size={13} /> : <Copy size={13} />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre><code className={language ? `language-${language}` : undefined}>{code}</code></pre>
    </div>
  );
}
