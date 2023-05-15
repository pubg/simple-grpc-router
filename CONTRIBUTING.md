# Contributing to simple-grpc-router

First off, thank you for considering contributing to simple-grpc-router. It's people like you that make simple-grpc-router such a great tool.

## Where do I go from here?

If you've noticed a bug or have a feature request, make a new issue! It's generally best if you get confirmation of your bug or approval for your feature request this way before starting to code.

## Fork & create a branch

If this is something you think you can fix, then fork and create a branch with a descriptive name.

```bash
git checkout -b my-feature-branch
```

## Get the test suite running
Make sure you're using a recent node version and run:
    
```bash
npm install
npm test
```

## Implement your fix or feature
At this point, you're ready to make your changes! Feel free to ask for help; everyone is a beginner at first.

## Make a Pull Request
At this point, you should switch back to your master branch and make sure it's up to date with simple-grpc-router's master branch:
```bash
git remote add upstream git@github.com:pubg/simple-grpc-router.git
git checkout master
git pull upstream master
```

Then update your feature branch from your local copy of master, and push it!
```bash
git checkout my-feature-branch
git rebase master
git push --set-upstream origin my-feature-branch
```

Finally, go to GitHub and make a Pull Request :D

## Merging a PR (maintainers only)

A PR can only be merged into master by a maintainer if:

1. It is passing CI.
2. It has been approved by at least two maintainers. If it was a maintainer who opened the PR, only one extra approval is needed.
3. It has no requested changes.
4. It is up to date with current master.

Any maintainer is allowed to merge a PR if all of these conditions are met.

## Shipping a release (maintainers only)

1. Make sure all PRs are in and CI is green.
2. Update the version in package.json (we follow semver).
3. Update CHANGELOG.md.
4. Commit and push.
5. Create a git tag for the version: `git tag v1.0.0`.
6. Push the tag to GitHub: `git push origin v1.0.0`.
7. Create a GitHub release and include highlights for the version.
8. Celebrate!

## Code of Conduct

In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

Please refer to the [Code of Conduct](CODE_OF_CONDUCT.md) for more information.

## Questions?

Don't be shy to ask questions. Everyone is a beginner at first and we'd rather help you than see you struggle.
