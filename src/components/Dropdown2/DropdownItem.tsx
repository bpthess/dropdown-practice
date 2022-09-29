interface Inherit {
  id: number;
  name: string;
}

const DropdownItem = () => {
  const ItemData: Inherit[] = [
    { id: 1, name: "아이템1" },
    { id: 2, name: "아이템2" },
    { id: 3, name: "아이템3" },
    { id: 4, name: "아이템4" },
  ];

  return (
    <ul>
      {ItemData.map((item) => {
        return <li>{item.name}</li>;
      })}
    </ul>
  );
};

export default DropdownItem;
