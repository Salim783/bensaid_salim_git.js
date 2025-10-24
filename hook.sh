#!/bin/sh

conventionnal_commit_regex='^(feat|fix|docs|style|refactor|test|chore|perf|ci|build|revert|hotfix)(\(.+\))?: .{1,50}'

if ! grep -qE "$conventionnal_commit_regex" "$1"; then
    echo "Invalid commit message format!"
    echo "Format: <type>(<scope>): <subject>"
    echo "Example: feat(auth): add login functionality"
    echo ""
    echo "Types: feat|fix|docs|style|refactor|test|chore|perf|ci|build|revert|hotfix"
    exit 1
fi