#!/bin/bash
# Seup Pattern Lab
echo "Setting up Pattern Lab"

# Remove existing Pattern Lab directory
rm -rf pattern-lab

# Install PL
composer create-project -n pattern-lab/edition-drupal-standard pattern-lab

# Delete the default source directory
echo "Delete the default source directory"
rm -rf pattern-lab/source

# Setup custom configuration
echo "Setting up custom configurations"
rm pattern-lab/config/config.yml
cp config/patternlab/config.yml pattern-lab/config/config.yml
