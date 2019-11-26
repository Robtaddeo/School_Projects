import pandas as pd
def pandas1():
    file_name = "books.csv"
    df pd.read_csv(file_name, sep=", ", encoding='utf-8')
    num_rows = df.shape[0]
    num_cols = df.shape[1]
    print()