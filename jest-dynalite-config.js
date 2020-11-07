module.exports = {
  tables: [
    {
      TableName: "player-points-table-test",
      KeySchema: [
        {
          AttributeName: "ID",
          KeyType: "HASH",
        },
      ],
      AttributeDefinitions: [
        {
          AttributeName: "ID",
          AttributeType: "S",
        },
      ],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
    },
  ],
};
