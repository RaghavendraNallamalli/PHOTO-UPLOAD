import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { userPublic } from "./Commondata";
import {
  Link,
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const SidebarCommon = () => {
  const links = userPublic;
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  return (
    <List>
      {links.map((key) => {
        return (
          <ListItem disablePadding key={key.path}>
            <ListItemButton
              onClick={() => {
                navigate({
                  pathname: key.path,
                  search: createSearchParams({
                    user_name: params.get("user_name"),
                    page: 1,
                  }).toString(),
                });
              }}
            >
              <ListItemText primary={key.name} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default SidebarCommon;
