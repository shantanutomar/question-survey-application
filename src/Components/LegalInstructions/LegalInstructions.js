import React from "react";
import CloseIcon from "../CloseIconButton/CloseIconButton";
import { withStyles } from "@material-ui/core/styles";
import MetaTags from "react-meta-tags";

const styles = theme => ({
  rootBox: {
    width: 400,
    height: "auto",
    alignSelf: "flex-start",
    marginTop: 60
  },
  iconLegalBox: {
    display: "flex",
    alignItems: "center",
    marginBottom: 25,
    margin: "25px 0px"
  },
  legalText: {
    marginLeft: 100,
    fontSize: 16,
    color: "#454f63",
    fontFamily: "GibsonSemiBold"
  },
  titleText: {
    width: "inherit",
    height: 22,
    color: "#454f63",
    fontFamily: "GibsonSemiBold",
    fontSize: 20,
    textAlign: "left",
    marginBottom: 25,
    padding: 10
  },
  contentText: {
    width: "inherit",
    height: 22,
    color: "#78849e",
    fontFamily: "GibsonRegular",
    fontSize: 16,
    textAlign: "left",
    padding: 10
  },
  textBox: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
    marginBottom: 10
  }
});

const LegalInstructions = props => {
  const { classes } = props;
  return (
    <div className={classes.rootBox}>
      <MetaTags>
        <title>{props.title}</title>
        <meta name="Description" content="Praestan App Terms of Use" />
      </MetaTags>

      <section className={classes.iconLegalBox}>
        <CloseIcon />
        <span className={classes.legalText}>{props.title}</span>
      </section>
      <section className={classes.textBox}>
        <span className={classes.titleText}>
          {`${props.title} of Praestan Health`}
        </span>
        <span className={classes.contentText}>
          {/* Can be passed as a prop */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          egestas justo vel lacinia porta. Pellentesque vel risus et felis
          vestibulum pharetra. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Aliquam erat volutpat.
          Vivamus mattis velit eget turpis dignissim euismod. Maecenas cursus
          imperdiet metus id semper. Sed varius pulvinar elit, et semper nulla
          facilisis varius. Curabitur in nunc eget metus mattis porta. In dictum
          tortor leo. Donec ut est suscipit, placerat sem quis, faucibus justo.
          Duis id nisi vitae ante vulputate ultricies in ac nibh. Donec id purus
          ut urna rhoncus dictum. Vivamus maximus ullamcorper nunc, nec egestas
          lacus facilisis eu. Aliquam nulla diam, luctus non varius eget,
          pulvinar id mi.
          <br />
          <br />
          Proin sit amet risus ornare, condimentum nisi vel, molestie massa.
          Phasellus eleifend maximus eros, ac tristique dui eleifend quis.
        </span>
      </section>
    </div>
  );
};

export default withStyles(styles)(LegalInstructions);
