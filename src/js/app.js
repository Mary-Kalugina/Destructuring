export default function returnArray({ special }) {
  special.forEach((obj) => {
    if (obj.description === undefined) {
      /* eslint-disable */     obj.description = 'Описание недоступно';
    }
  });
  return special;
}
