import React, { Component } from "react";
import {
  Grid,
  Input,
  TextArea,
  Form,
  Label,
  Button,
  Modal,
  Header
} from "semantic-ui-react";
import sydheadshot from "../sydheadshot.JPG";
import * as emailjs from "emailjs-com";

export default class SendEmail extends Component {
  constructor() {
    super();

    this.state = {
      to: "sydabailey@gmail.com",
      from: "",
      subject: "",
      body: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    //     const { to, from, subject, body } = this.state;
    //     let service_id = "default_service";
    //     let templateParams = {
    //       from_name: from,
    //       to_name: to,
    //       subject: subject,
    //       message_html: body
    //     };
    //     emailjs
    //       .send(
    //         service_id,
    //         "template_GsqBmIod",
    //         templateParams,
    //         "user_1hfmetEtwXTcvDm43YPN2"
    //       )
    //       .then(resp => {
    //         console.log(resp);
    //       });

    //     this.resetForm();
    //   };
    //   resetForm() {
    //     this.setState({
    //       from: "",
    //       subject: "",
    //       body: ""
    //     });
  };

  render() {
    // console.log(this.state);
    return (
      <Form onSubmit={this.handleSubmit}>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={4} id="messagegrid">
              <p>
                <b>To:</b>
              </p>
            </Grid.Column>
            <Grid.Column width={12}>
              <Label
                image
                style={{ fontFamily: "Verdana", backgroundColor: "#c4dff0" }}
              >
                <img src={sydheadshot} />
                Syd Bailey
              </Label>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4} id="messagegrid">
              <p>
                <b>Your Email:</b>
              </p>
            </Grid.Column>
            <Grid.Column width={12}>
              <Input fluid name="from" onChange={this.handleChange} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4} id="messagegrid">
              <b>Subject:</b>
            </Grid.Column>
            <Grid.Column width={12}>
              <Input
                style={{ fontFamily: "Verdana" }}
                fluid
                placeholder="Syd, we want to hire you!"
                name="subject"
                onChange={this.handleChange}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4} id="messagegrid">
              <b>Body:</b>
            </Grid.Column>
            <Grid.Column width={12}>
              <TextArea
                placeholder="--------------------------"
                fluid="true"
                style={{ minHeight: 300, fontFamily: "courier" }}
                name="body"
                onChange={this.handleChange}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Modal trigger={<Button id="sendButton">Send</Button>} closeIcon>
          <Header
            style={{ fontFamily: "Verdana " }}
            icon="thumbs up"
            content="Your Message Has Been Sent!"
          />
          <Modal.Content>
            <p style={{ fontFamily: "Verdana " }}>
              Thanks for reaching out to me! I'm excited to hear from you, and
              I'll get back to you as soon as I can. Enjoy MyPortfolio!
              <br />
              <br />- Syd
            </p>
          </Modal.Content>
        </Modal>
      </Form>
    );
  }
}
