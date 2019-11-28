import * as React from 'react';

export interface ItemListProps<T> {
  items: T[];
  itemRenderer: React.FC<T>;
}

export class ItemList<T> extends React.Component<ItemListProps<T>, {}> {
  render() {
    const { items, itemRenderer } = this.props;

    return <>{items.map(itemRenderer)}</>;
  }
}
