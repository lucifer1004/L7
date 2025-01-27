// @ts-ignore
import { Scene } from '@antv/l7';
import { GaodeMap } from '@antv/l7-maps';
import * as React from 'react';

export default class MultiGaodeMap extends React.Component {
  private scene1: Scene;
  private scene2: Scene;

  public componentWillUnmount() {
    this.scene1.destroy();
    this.scene2.destroy();
  }

  public async componentDidMount() {
    const response = await fetch(
      'https://gw.alipayobjects.com/os/basement_prod/d2e0e930-fd44-4fca-8872-c1037b0fee7b.json',
    );
    const scene1 = new Scene({
      id: 'map1',
      map: new GaodeMap({
        center: [110.19382669582967, 50.258134],
        pitch: 0,
        style: 'light',
        zoom: 3,
      }),
    });
    const scene2 = new Scene({
      id: 'map2',
      map: new GaodeMap({
        center: [110.19382669582967, 50.258134],
        pitch: 0,
        style: 'dark',
        zoom: 3,
      }),
    });
    this.scene1 = scene1;
    this.scene2 = scene2;
  }

  public render() {
    return (
      <>
        <div
          id="map1"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: '50%',
            bottom: 0,
          }}
        />
        <div
          id="map2"
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            right: 0,
            bottom: 0,
          }}
        />
      </>
    );
  }
}
