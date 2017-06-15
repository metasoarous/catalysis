
# Note; these env variables will be read and parsed by the config component in datsys.config
# Take a look there for further information about what's available.

# Copy this file over into config/local/env.sh; This dir is ingored by git, so you don't version credentials.

# Insert your username and password here: XXX TODO
export DATOMIC_USERNAME=
export DATOMIC_PASSWORD=

# Set your datomic url env var; this should match the url that prints out when your transactor starts.
# If you don't change much with the example/dev-transactor.properties, this should work fine.
export DATOMIC_URL="datomic:dev://localhost:4834/datsys"
# If you'd like to switch to sql backend, you'll have something like this:
#export DATOMIC_URL="datomic:sql://datsys?jdbc:mysql://localhost:3306/datsys"


