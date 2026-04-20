#!/usr/bin/env node

import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { homedir } from 'node:os';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourceDir = join(__dirname, '..', 'skill');
const targetDir = join(homedir(), '.claude', 'skills', 'pua-benchmark');

console.log('🔍 PUA Benchmark — 安装中...\n');

// Check if .claude/skills exists
const skillsDir = join(homedir(), '.claude', 'skills');
if (!existsSync(skillsDir)) {
  mkdirSync(skillsDir, { recursive: true });
}

// Check if already installed
if (existsSync(targetDir)) {
  console.log('⚠️  检测到已安装的版本，正在覆盖更新...\n');
}

// Copy skill files
cpSync(sourceDir, targetDir, { recursive: true });

// Print success
console.log('✅ 已安装到 ~/.claude/skills/pua-benchmark/');
console.log('   - SKILL.md');
console.log('   - knowledge/core_kb.md');
console.log('   - knowledge/intimate_kb.md');
console.log('   - knowledge/workplace_kb.md');
console.log('   - knowledge/social_kb.md');
console.log('');
console.log('🎉 安装完成！在 Claude Code 中使用：');
console.log('   - 输入 /pua-benchmark 启动');
console.log('   - 或直接说"帮我分析这段对话是不是 PUA"');
console.log('');
console.log('📖 卸载：rm -rf ~/.claude/skills/pua-benchmark');
