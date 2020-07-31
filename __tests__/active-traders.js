// 5      →  dictionary[] size n = 5
// heater →  dictionary = ['heater', 'cold', 'clod', 'reheat', 'docl']
// cold
// clod
// reheat
// docl
// 3      →  query[] size q = 3
// codl   →  query = ['codl', 'heater', 'abcd']
// heater
// abcd


const reduceCustomerNamesToIncludeNumberOfTrades = (
    activeList, customer, idx, arr
) => {
  const customerAdded = activeList.find((c) => c.customer === customer);
  if (!customerAdded) {
    const trades = arr.filter((c) => c === customer).length;
    const totalTrades = arr.length;
    const result = {
      trades,
      customer,
      percent: (trades/totalTrades) * 100,
    };
    activeList.push(result);
  }
  return activeList;
};

const sortByName = (a, b) => {
  if (a < b) return -1;
  else if (b < a) return 1;
  else return 0;
};

const sortCustomersAsPerTrade = (b = {}, a = {}) => a.percent - b.percent;

const atLeast5PercentFilter = (c) => c.percent >= 5;

const mostActive = (customers = []) => customers
    .reduce(reduceCustomerNamesToIncludeNumberOfTrades, [])
    .sort(sortCustomersAsPerTrade)
    .filter(atLeast5PercentFilter)
    .map((c) => c.customer)
    .sort(sortByName);

describe('srotByName', () => {
  it('should sort customer list by name', () => {
    const customers = ['Omega', 'Alpha'];
    const result = customers.sort(sortByName);
    expect(result[0]).toBe('Alpha');
  });
});

describe('sortCustomersAsPerPercent', () => {
  it(`sort the customer list based on their trades
`, () => {
    const customers = [
      {
        customer: 'Alpha',
        trades: 10,
        percent: 10,
      }, {
        customer: 'Omega',
        trades: 90,
        percent: 90,
      },
    ];
    const result = customers.sort(sortCustomersAsPerTrade);
    expect(result[0]).toEqual({
      trades: 90,
      customer: 'Omega',
      percent: 90,
    });
  });
});

describe('reduceCustomerNamesToIncludeNumberOfTrades', () => {
  it(`should reduce the list of customers to a
      list which give a total of the customers
      trades and their name.
`, () => {
    const customers = ['Omega', 'Alpha', 'Alpha', 'Alpha', 'Alpha'];
    const result = customers
        .reduce(reduceCustomerNamesToIncludeNumberOfTrades, []);
    expect(result[0]).toEqual({
      trades: 1,
      customer: 'Omega',
      percent: 20,
    });
    expect(result[1]).toEqual({
      trades: 4,
      customer: 'Alpha',
      percent: 80,
    });
    expect(result[2]).toBe(undefined);
    expect(result.length).toEqual(2);
  });
});

describe('mostActive method', () => {
  test('should list the most active traders', () => {
    const customers = [
      'Omega', 'Alpha', 'Alpha',
    ];
    const result = mostActive(customers);
    expect(result[0]).toBe('Alpha');
    expect(result[1]).toBe('Omega');
    expect(result[2]).toBe(undefined);
  });
  test(`should list the most active only
    if trader has at least 5% of total trades
    `, () => {
    const customers = [
      'Alpha',
      'Omega',
      'Alpha',
      'Omega',
      'Alpha',
      'Omega',
      'Alpha',
      'Omega',
      'Alpha',
      'Omega',
      'Alpha',
      'Omega',
      'Alpha',
      'Omega',
      'Alpha',
      'Omega',
      'Alpha',
      'Omega',
      'Beta',
    ];
    const result = mostActive(customers);
    expect(result[2]).toBe('Omega');
  });
});
