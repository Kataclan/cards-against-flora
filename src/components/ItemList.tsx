import * as React from 'react';

export interface ItemListProps<T> {
  items: T[];
  itemRenderer: (item: T) => JSX.Element;
}

export class ItemList<T> extends React.Component<ItemListProps<T>, {}> {
  render() {
    const { items, itemRenderer } = this.props;

    return <>{items.map(itemRenderer)}</>;
  }
}
