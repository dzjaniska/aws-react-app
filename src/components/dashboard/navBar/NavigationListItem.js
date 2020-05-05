import React, { forwardRef, useState } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Button, Collapse, ListItem } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Link from "@material-ui/core/Link";

const chechUrl = url => url && url.indexOf("http") > -1;

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{ flexGrow: 1 }}
  >
    {chechUrl(props.to) ?
      <Link href={props.to}
            style={props.style}
            className={props.className}
            children={props.children}
      />
      :
      <RouterLink {...props} />
    }
  </div>
));

const useStyles = makeStyles(theme => ({
  item: {
    display: "block",
    paddingTop: 0,
    paddingBottom: 0
  },
  itemLeaf: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: theme.palette.navigation || theme.palette.primary.light,
    padding: "15px 8px",
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%"
  },
  buttonLeaf: {
    color: theme.palette.navigation || theme.palette.primary.light,
    padding: "15px 8px",
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
    fontWeight: theme.typography.fontWeightRegular,
    "&.depth-0": {
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  icon: {
    color: theme.palette.navigation || theme.palette.primary.light,
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(1)
  },
  expandIcon: {
    marginLeft: "auto",
    height: 16,
    width: 16
  },
  label: {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto"
  },
  active: {
    color: theme.palette.navigationActive || theme.palette.primary.contrastText,
    fontWeight: theme.typography.fontWeightMedium,
    "& $icon": {
      color: theme.palette.navigationActive || theme.palette.primary.contrastText
    }
  }
}));

const NavigationListItem = props => {
  const {
    title,
    href,
    depth,
    children,
    icon: Icon,
    className,
    open: openProp,
    label: Label,
    onClick,
    ...rest
  } = props;

  const classes = useStyles();
  const [open, setOpen] = useState(openProp);

  const handleToggle = () => {
    setOpen(open => !open);
  };

  let paddingLeft = 8;

  if (depth > 0) {
    paddingLeft = 32 + 8 * depth;
  }

  const style = {
    paddingLeft
  };

  const linkProps = !onClick ? {
    activeClassName: classes.active,
    exact: true,
    to: href
  } : {};

  if (children) {
    return (
      <ListItem
        {...rest}
        className={clsx(classes.item, className)}
        disableGutters
      >
        <Button
          className={classes.button}
          onClick={handleToggle}
          style={style}
        >
          {Icon && (typeof Icon === "object" ? <Icon className={classes.icon}/> : <img className={classes.icon} src={Icon} alt="X"/>)}
          {title}
          {open ? (
            <ExpandLessIcon
              className={classes.expandIcon}
              color="inherit"
            />
          ) : (
            <ExpandMoreIcon
              className={classes.expandIcon}
              color="inherit"
            />
          )}
        </Button>
        <Collapse in={open}>{children}</Collapse>
      </ListItem>
    );
  } else {
    return (
      <ListItem
        {...rest}
        className={clsx(classes.itemLeaf, className)}
        disableGutters
      >
        <Button
          {...linkProps}
          className={clsx(classes.buttonLeaf, `depth-${depth}`)}
          component={onClick ? Button : CustomRouterLink}
          onClick={onClick}
          style={style}
        >
          {Icon && (typeof Icon === "object" ? <Icon className={classes.icon}/> : <img className={classes.icon} src={Icon} alt="X"/>)}
          {title}
          {Label && (
            <span className={classes.label}>
              <Label/>
            </span>
          )}
        </Button>
      </ListItem>
    );
  }
};

NavigationListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  icon: PropTypes.any,
  label: PropTypes.any,
  open: PropTypes.bool,
  title: PropTypes.any.isRequired
};

NavigationListItem.defaultProps = {
  depth: 0,
  open: false
};

export default NavigationListItem;
