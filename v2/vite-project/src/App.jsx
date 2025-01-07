import "./App.css";
import { Flex, Text, Button, DropdownMenu, Card } from "@radix-ui/themes";
import { CaretSortIcon } from "@radix-ui/react-icons";

import { Overview } from "./Overview";
import MyComponent from "./MyComponent";

export default function App() {
  const title = "React";

  return (
    <Flex direction="column" gap="2">
      <div className="dropdown">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft">
              Options
              {/* <DropdownMenu.TriggerIcon /> */}
              <CaretSortIcon />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
            <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
              <DropdownMenu.SubContent>
                <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
                <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

                <DropdownMenu.Separator />
                <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Sub>

            <DropdownMenu.Separator />
            <DropdownMenu.Item>Share</DropdownMenu.Item>
            <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
              Delete
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>

      <Text>Hello from Radix Themes :)</Text>
      <Button>Let's go</Button>

      <div className="overview">
        <Card>
          <Overview />
        </Card>
      </div>
      <MyComponent />
    </Flex>
  );
}
