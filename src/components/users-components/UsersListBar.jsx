import { Grid, GridItem, Text } from "@chakra-ui/react";
import ChooseView from "../grid-components/chooseview";

export default function UsersListBar() {
  return (
    <GridItem colSpan={12}>
      <Grid
      w="full"
      alignItems="center"
    >
        <GridItem>
          <Text
            fontFamily="Inter"
            fontWeight="500"
            fontSize="18px"
            lineHeight="tall"
          >
            Users List
          </Text>
        </GridItem>
      </Grid>
    </GridItem>
    
  );
}
