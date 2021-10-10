import React from "react";
import styled from "styled-components";
import Container from "../generic/Container/Container";

const Wrapper = styled.div`
  border-bottom: 1px solid #121212;
  margin: 0;
  padding: 0 10rem;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.3rem;
  margin-top: 2rem;
  padding-bottom: 5rem;
`;

const RenderComponent = styled.div`
  margin-top: -20rem;
  margin-bottom: 5rem;
`;

const Documentation = styled.table``;

class DocumentComponent extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>{this.props.title}</Title>
        <Container>
          <RenderComponent>{this.props.component}</RenderComponent>
          <Documentation>
            <tbody>
            <tr key={1}>
              <th>Prop</th>
              <th>Description</th>
              <th>Type</th>
              <th>Default value</th>
            </tr>
            {this.props.propDocs.map((doc, index) => {
              return (
                <tr key={index}>
                  <td>{doc.prop}</td>
                  <td>{doc.description}</td>
                  <td>{doc.type}</td>
                  <td>
                    <code>{doc.defaultValue}</code>
                  </td>
                </tr>
              );
            })}
            </tbody>
          </Documentation>
        </Container>
      </Wrapper>
    );
  }
}

export default DocumentComponent;
