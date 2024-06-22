import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    borderBottom: 1,
    borderColor: 'black',
    marginBottom: 10,
    paddingBottom: 3,
  },
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.input}>John Doe</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.input}>johndoe@example.com</Text>

        <Text style={styles.label}>Message:</Text>
        <Text style={styles.input}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
