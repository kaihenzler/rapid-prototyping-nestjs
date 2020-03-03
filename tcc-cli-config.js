module.exports = {
    "merges": [
        [
            "master",
            "01-init-workspace/start",
            "01-init-workspace/solution"
        ],
        [
            "01-init-workspace/solution",
            "02-create-lib/start",
            "02-create-lib/solution",
        ],
        [
            "02-create-lib/solution",
            "03-constraints/start",
            "03-constraints/solution",
        ],
        [
            "03-constraints/solution",
            "04-typeorm/start",
            "04-typeorm/solution",
        ],
        [
            "04-typeorm/solution",
            "05-generate-entity/start",
            "05-generate-entity/solution",
        ],
        [
            "05-generate-entity/solution",
            "06-define-interfaces/start",
            "06-define-interfaces/solution",
        ],
        [
            "06-define-interfaces/solution",
            "07-backend-master-data/start",
            "07-backend-master-data/solution",
        ],
        [
            "07-backend-master-data/solution",
            "08-backend-repair-jobs/start",
            "08-backend-repair-jobs/solution",
        ],
        [
            "08-backend-repair-jobs/solution",
            "09-backend-testing/start",
            "09-backend-testing/solution",
        ],
        [
            "09-backend-testing/solution",
            "10-database-migration/start",
            "10-database-migration/solution",
        ],
        [
            "10-database-migration/solution",
            "11-frontend/start",
            "11-frontend/solution",
        ],
        [
            "11-frontend/solution",
            "12-e2e-test/start",
            "12-e2e-test/solution",
        ],
    ],
};
