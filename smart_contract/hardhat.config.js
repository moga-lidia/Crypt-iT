require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/IL5qdtqI2UroHLzYXCh1hzKLX3kvk1aJ',
      accounts: ['dea8078053d9e3c32d4e2120125742bdfd7572989abe81dff614a37e31ad743c'],
    },
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/IL5qdtqI2UroHLzYXCh1hzKLX3kvk1aJ',
      accounts: ['d885f41d4d88e4cb13d4927582417f32f0e969f7499c6a4dbddd47a92bc6b443'],
    }
  },
};