import pandas as pd
import json

def main():
    deco_df = pd.read_csv('./DecoTable.csv')

    deco_dict = {'dropRates': {}}

    for deco_source in deco_df.columns[2:]:
        source_table = deco_df[deco_df[deco_source] != 0][['Rarity', 'Decoration Name', deco_source]]
        source_table = source_table.rename(columns={'Rarity': 'rarity', 'Decoration Name': 'decoration', deco_source: 'probability'})
        deco_dict['dropRates'][deco_source] = json.loads(source_table.to_json(orient='index'))
    
    with open('deco_table.json', 'w') as out_f:
        # json.dump(deco_dict, out_f)
        out_f.write(json.dumps(deco_dict))
        print(f'Wrote table to {out_f}')
        

if __name__ == '__main__':
    main()