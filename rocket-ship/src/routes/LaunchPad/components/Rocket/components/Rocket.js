import React, { useState, PureComponent } from 'react';
import RocketCore from './RocketCore';

export const FunctionalRocket = React.memo(props => {
  const [initialLaunchTime] = useState(Date.now());

  return <RocketCore initialLaunchTime={initialLaunchTime} />;
}
)
/*
  Changed Component to PureComponent.
  React's PureComponent does a shallow compare on the component's props and state. 
  If nothing has changed, it prevents the rerender of the component.
*/

export class ClassRocket extends PureComponent {
  constructor() {
    super();

    this.state = {
      initialLaunchTime: Date.now()
    };
  }

  render() {
    const { initialLaunchTime } = this.state;

    return <RocketCore initialLaunchTime={initialLaunchTime} />;
  }
}
