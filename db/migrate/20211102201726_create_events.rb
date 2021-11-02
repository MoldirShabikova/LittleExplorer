class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :title
      t.string :date
      t.string :time
      t.string :age
      t.string :price
      t.string :location
      t.string :image
      t.string :description
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
