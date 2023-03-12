export default function returnArray({ special }) {
  const arr = [];
  special.forEach((obj) => {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = obj;
    arr.push({
      id, name, icon, description,
    });
  });
  return arr;
}
