import { Component } from 'react';
import styled from "styled-components";
import DocumentComponent from "../components/documentation/DocumentComponent";
import Display from "../components/generic/Display/Display";
import Button from "../components/generic/Button/Button";
import Tabs from "../components/generic/Tabs/Tabs";
import Card from "../components/generic/Card/Card";
import Panel from "../components/generic/Panel/Panel";
import Timer from "../components/generic/Timer";


const Title = styled.div`
  font-size: 2rem;
`;

class Documentation extends Component {

  flip = () => {
    const card = document.querySelector("#testcard");
    if (card) card.classList.toggle('is-flipped');
  }

  render() {
    return (
        <>
          <Title>Documentation</Title>


          <DocumentComponent
            title="Generic Timer"
            component={<Panel><Timer /></Panel>}
            propDocs={[
              {
                prop: "settings",
                description: "Collection that defines the allowed settings for a timer",
                type: "array of objects - [{label: 'label1', value: 'value1', placeholder: 'placeholder1'}, {...}]",
                defaultValue: "Optional. Default: []",
              },
              {
                prop: "statusMessage",
                description: "Status message that can be used for rounds/rest",
                type: "string",
                defaultValue: "Optional. Default: None",
              },
              {
                prop: "startTime",
                description: "Starting time for the timer",
                type: "string",
                defaultValue: "Optional. Default: 00:00:00",
              },
              {
                prop: "onChange",
                description: "Event handler for capturing values input on change",
                type: "func",
                defaultValue: "Optional. Default: None",
              }

            ]}
          />   

          <DocumentComponent
            title="Circular Display "
            component={<Display isStarted={true} status="Status Text" value="00:10:00" />}
            propDocs={[
              {
                prop: "isStarted",
                description: "Animates the circular display",
                type: "bool",
                defaultValue: "Optional. Default: false",
              },
              {
                prop: "status",
                description: "Status message that can be used for rounds/rest",
                type: "string",
                defaultValue: "Optional. Default: None",
              },
              {
                prop: "value",
                description: "Value to be displayed",
                type: "string",
                defaultValue: "Optional. Default: 00:00:00",
              }
            ]}
          />    

          <DocumentComponent
            title="Button "
            component={<Button onClick={() => console.log("test")}>Text Button</Button>}
            propDocs={[
              {
                prop: "id",
                description: "Identifier for the button",
                type: "string",
                defaultValue: "Optional. Default: None",
              },
              {
                prop: "value",
                description: "Identifier for the action useful to identify the event",
                type: "string",
                defaultValue: "Optional. Default: None"
              },
              {
                prop: "isIconButton",
                description: "Creates an icon button",
                type: "boolean",
                defaultValue: "Optional. Default: false"
              },
              {
                prop: "iconName",
                description: "Name of the icon taken from ion icons. Applicable only when isIconButton is true",
                type: "string",
                defaultValue: "Optional. Default: None"
              },
              {
                prop: "iconVisible",
                description: "Sets the visibility of the icon in an Icon Button. Applicable only when isIconButton is true",
                type: "bool",
                defaultValue: "Optional. Default: true"
              },
              {
                prop: "classifiers",
                description: "CSS classes to append additional styles",
                type:  "string",
                defaultValue:  "Optional. Default: 'btn_primary' for text buttons. Possible values for icon buttons: 'primary', 'secondary'"
              },
              {
                prop: "onClick",
                description: "Event handler for clicking on a button",
                type:  "function",
                defaultValue:  "Required. Default: None"
              },
            ]}
          />

          <DocumentComponent
            title="Button (with Icon configuration)"
            component={<Button 
              id = "settings_btn"
              value="settings"
              classifiers = "secondary"
              isIconButton = {true}
              onClick={()=>console.log("icon button")}
              iconName="settings"
            />}
            propDocs={[
              {
                prop: "id",
                description: "Identifier for the button",
                type: "string",
                defaultValue: "Optional. Default: None",
              },
              {
                prop: "value",
                description: "Identifier for the action useful to identify the event",
                type: "string",
                defaultValue: "Optional. Default: None"
              },
              {
                prop: "isIconButton",
                description: "Creates an icon button",
                type: "boolean",
                defaultValue: "Optional. Default: false"
              },
              {
                prop: "iconName",
                description: "Name of the icon taken from ion icons. Applicable only when isIconButton is true",
                type: "string",
                defaultValue: "Optional. Default: None"
              },
              {
                prop: "iconVisible",
                description: "Sets the visibility of the icon in an Icon Button. Applicable only when isIconButton is true",
                type: "bool",
                defaultValue: "Optional. Default: true"
              },
              {
                prop: "classifiers",
                description: "CSS classes to append additional styles",
                type:  "string",
                defaultValue:  "Optional. Default: 'btn_primary' for text buttons. Possible values for icon buttons: 'primary', 'secondary'"
              },
              {
                prop: "onClick",
                description: "Event handler for clicking on a button",
                type:  "function",
                defaultValue:  "Required. Default: None"
              },
            ]}
          />

          <DocumentComponent
            title="Tabs "
            component={<Tabs tabItems={["Tab 1", "Tab 2", "Tab 3", "Tab 4"]} />}
            propDocs={[
              {
                prop: "tabItems",
                description: "Array of tab labels. Max 4 tabs. If more, the control will not render",
                type: "Array of strings",
                defaultValue: "Optional. Default: []",
              },
              {
                prop: "onChange",
                description: "Event handler for capturing the selected tab",
                type: "func",
                defaultValue: "Optional. Default: None",
              }
            ]}
          />    

          <DocumentComponent
            title="Card "
            component={
              <Panel id="testcard">
                <Card side="front">
                  front side
                  <Button onClick={this.flip}>Flip</Button>
                </Card>
                <Card side="back">
                  back side
                  <Button onClick={this.flip}>Flip Again</Button>
                </Card>
              </Panel>}
            propDocs={[
              {
                prop: "side",
                description: `Card container that flips using css. 
                Two Cards (front and back) need to be defined in order for flipping to work`,
                type: "string",
                defaultValue: "Optional. Default: 'front'. Possible values: 'front' |  'back'",
              },
              {
                prop: "Children Nodes",
                description: `Accepts any React and HTML valid nodes. 
                An event within a child element of the card could trigger the flipping.
                The event handler should query the id of Panel container and apply toggle('is-flipped') to
                the queried element`,
                type: "node",
                defaultValue: "Optional. Default: None",
              }
            ]}
          /> 

          <DocumentComponent
            title="Panel "
            component={<Panel >Content goes here</Panel>}
            propDocs={[
              {
                prop: "id",
                description: "Identifier for the panel that will allow flipping the cards",
                type: "string",
                defaultValue: "Optional. Default: None",
              },
              {
                prop: "Children Nodes",
                description: "Accepts any React and HTML valid nodes",
                type: "node",
                defaultValue: "Optional. Default: None",
              }
            ]}
          />

          <DocumentComponent
            title="Container "
            component="Generic Empty Container"
            propDocs={[
              {
                prop: "Children Nodes",
                description: "Accepts any React and HTML valid nodes",
                type: "node",
                defaultValue: "Optional. Default: None",
              }
            ]}
          />           


        </>
    );
  }
}

export default Documentation;
