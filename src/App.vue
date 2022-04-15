<template>
  <Splitter>
    <SplitterPanel>
      <div>
        <SplitButton
          label="Save"
          icon="pi pi-plus"
          :model="items"
        ></SplitButton>
      </div>
      <div>
        <Calendar v-model="selectedDate"></Calendar>
      </div>
    </SplitterPanel>
    <SplitterPanel>
      <div>
        <DataTable :value="cars">
          <Column field="brand" header="Brand"></Column>
          <Column field="year" header="Year"></Column>
        </DataTable>
      </div>
    </SplitterPanel>
  </Splitter>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selectedDate: null,
      items: [
        {
          label: "Update",
          icon: "pi pi-refresh",
          command: () => {
            alert("updated");
          },
        },
        {
          label: "Delete",
          icon: "pi pi-times",
          command: () => {
            alert("deleted");
          },
        },
      ],
      cars: [
        { brand: "Volkswagen", year: 2015 },
        { brand: "Audi", year: 2017 },
        { brand: "Renault", year: 2019 },
      ],
    };
  },
};
</script>
