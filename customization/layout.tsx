import { Component, ComponentClass } from 'react';

interface SwaggerExtensionProps {
  getComponent(arg0: string, arg1: boolean): ComponentClass;
}

class OperationsLayout extends Component<SwaggerExtensionProps> {
    render() {
      const {
        getComponent
      } = this.props
  
      const Operations = getComponent("operations", true)
  
      return (
        <div>
          <p>Extension</p>
          <Operations />
        </div>
      )
    }
  }
  
  // Create the plugin that provides our layout component
export const OperationsLayoutPlugin = () => {
  return {
    components: {
      OperationsLayout: OperationsLayout
    }
  }
}

class AugmentingLayout extends Component<SwaggerExtensionProps> {
  render() {
    const {
      getComponent
    } = this.props

    const BaseLayout = getComponent("BaseLayout", true)

    return (
      <div>
        <div className="myCustomHeader">
          <h1>I have a custom header above Swagger-UI!</h1>
        </div>
        <BaseLayout />
        <div>
          <h1>Custom footer</h1>
        </div>
      </div>
    )
  }
}

// Create the plugin that provides our layout component
export const AugmentingLayoutPlugin = () => {
  return {
    components: {
      AugmentingLayout: AugmentingLayout
    }
  }
}