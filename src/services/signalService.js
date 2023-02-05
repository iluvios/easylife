import firestore from '@react-native-firebase/firestore';

export const CreateSignalDocument = async state => {
  const {
    marketState,
    imageOne,
    imageTwo,
    currencyOne,
    currencyTwo,
    action,
    relativeRisk,
    stopLoss,
    takeProfit,
    entryPrice,
    orderType,
    status,
    comment,
    graphImage,
  } = state;

  if (
    !marketState ||
    !imageOne ||
    !imageTwo ||
    !currencyOne ||
    !currencyTwo ||
    !action ||
    !relativeRisk ||
    !stopLoss ||
    !takeProfit ||
    !entryPrice ||
    !orderType ||
    !status ||
    !comment ||
    !graphImage
  ) {
    throw new Error('Todos los campos son obligatorios');
  }

  return await firestore()
    .collection('Signals')
    .add({
      marketState: 'BULLISH',
      imageOne: 'señal.png',
      imageTwo: 'señal.png',
      currencyOne: 'USD',
      currencyTwo: 'EUR',
      action: 'COMPRAR',
      relativeRisk: '1:1',
      stopLoss: '1.12345 +30 pips',
      takeProfit: '1.52345 +501 pips',
      entryPrice: '1.32345',
      orderType: 'Buy Limit',
      status: 'Break Even',
      date: firestore.Timestamp.fromDate(new Date()),
      comment: '13.3 PIPS Invalidation',
      graphImage: 'señal.png',
    });
};
